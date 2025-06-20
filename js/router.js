import renderLoginPage from "./pages/LoginPage.js";
import { setupLoginTabToggle } from "./pages/LoginTab.js";
import { setupSignUpEvent } from "./pages/SignUpEvent.js";
import Header, { setupHeaderEvent } from "./components/Header.js"; //GNB
import renderSignUpPage from "./pages/SignUp.js";
import renderProductListPage from "./pages/List.js";
import renderNotFoundPage from "./pages/NotFound.js";
import renderDetailPage from "./pages/Detail.js";

const routes = {
  "/login": renderLoginPage,
  "/signup": renderSignUpPage,
  "/product-list": renderProductListPage,
  "/detail": renderDetailPage,
};

//주소 찾기(파싱)
function parseLocation() {
  let hash = location.hash.replace("#", "").toLowerCase();
  if (!hash) hash = "/login";
  if (!hash.startsWith("/")) hash = "/" + hash;
  return hash;
}

//로그인 상태 확인-토큰교체 필수⭐⭐⭐
function isLoggedIn() {
  return !!localStorage.getItem("user");
}

async function router() {
  const path = parseLocation();
  const render = routes[path] || renderNotFoundPage;

  console.log("현재 path:", path);

  //비로그인시 로그인페이지로
  if (!isLoggedIn() && path !== "/login" && path !== "/signup") {
    sessionStorage.setItem("prevPath", location.hash);
    location.hash = "/login";
    return;
  }

  if (path.startsWith("/detail/")) {
    const id = path.split("/detail/")[1];
    const html = await renderDetailPage(id);
    document.getElementById("app").innerHTML = html;
  } else {
    const render = routes[path] || renderNotFoundPage;
    const html = await render();
    document.getElementById("app").innerHTML = html;
  }

  //app에 html문자열 반환하기
  const html = await render();
  document.getElementById("app").innerHTML = html;

  //gnb등장조건
  const gnbContainer = document.getElementById("gnb");
  const hideGnbPaths = ["/login", "/signup", "/"];

  if (hideGnbPaths.includes(path) || !routes[path]) {
    gnbContainer.innerHTML = "";
  } else {
    gnbContainer.innerHTML = Header();
    setupHeaderEvent();
  }

  // 페이지별 이벤트 바인딩
  if (path === "/signup") {
    setupSignUpEvent();
  }
  if (path === "/login") {
    setupLoginTabToggle();
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
export default router;
