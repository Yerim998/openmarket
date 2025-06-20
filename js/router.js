import renderLoginPage from "./pages/LoginPage.js";
import { setupLoginTabToggle } from "./pages/LoginTab.js";
import { setupSignUpEvent } from "./pages/SignUpEvent.js";
import Header, { setupHeaderEvent } from "./components/Header.js"; //GNB
import renderSignUpPage from "./pages/SignUp.js";
import renderProductListPage from "./pages/List.js";

const routes = {
  "/login": renderLoginPage,
  "/signup": renderSignUpPage,
  "/product-list": renderProductListPage,
  // "/detail": renderDetailPage,
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

function router() {
  const path = parseLocation();
  const render = routes[path] || renderLoginPage;

  console.log("현재 path:", path);

  //비로그인시 로그인페이지로
  if (path !== "/" && !isLoggedIn()) {
    sessionStorage.setItem("prevPath", location.hash);
    location.hash = "/login";
    return;
  }

  //app에 문자열 return-spa
  document.getElementById("app").innerHTML = render();

  //gnb등장조건
  const gnbContainer = document.getElementById("gnb");
  const hideGnbPaths = ["/login", "/signup", "/"];

  if (hideGnbPaths.includes(path)) {
    gnbContainer.innerHTML = "";
    if (path === "/" || path === "/login") setupLoginTabToggle();
  } else {
    gnbContainer.innerHTML = Header();
    setupHeaderEvent();
  }

  if (path === "/signup") {
    setupSignUpEvent();
  }

  if (route) {
    route();
  } else {
  }
}
window.addEventListener("hashchange", router);
export default router;
