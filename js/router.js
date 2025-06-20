import renderLoginPage from "./pages/LoginPage.js";
import { setupLoginTabToggle } from "./pages/LoginTab.js";
import { setupSignUpEvent } from "./pages/SignUpEvent.js";
import Header, { setupHeaderEvent } from "./components/Header.js";
import renderSignUpPage from "./pages/SignUp.js";
import renderProductListPage from "./pages/List.js";
import renderNotFoundPage from "./pages/NotFound.js";
import renderDetailPage from "./pages/Detail.js";

const routes = {
  "/login": renderLoginPage,
  "/signup": renderSignUpPage,
  "/product-list": renderProductListPage,
};

function parseLocation() {
  let hash = location.hash.replace("#", "").toLowerCase();
  if (!hash || hash === "/") hash = "/login";
  if (!hash.startsWith("/")) hash = "/" + hash;
  return hash;
}

async function router() {
  const path = parseLocation();

  if (!isLoggedIn() && path !== "/login" && path !== "/signup") {
    location.hash = "/login";
    return;
  }

  try {
    if (path.startsWith("/detail/")) {
      const id = path.split("/")[2];
      const html = await renderDetailPage(id);
      document.getElementById("app").innerHTML = html;
    } else {
      const render = routes[path] || renderNotFoundPage;
      const html = await render();
      document.getElementById("app").innerHTML = html;
    }
  } catch (error) {
    console.error("라우팅 에러:", error);
    document.getElementById("app").innerHTML =
      "<p>페이지를 불러오지 못했습니다.</p>";
  }

  renderGnb(path);

  if (path === "/signup") setupSignUpEvent();
  if (path === "/login") setupLoginTabToggle();
}

function renderGnb(path) {
  const gnbContainer = document.getElementById("gnb");
  const hideGnbPaths = ["/login", "/signup"];

  if (hideGnbPaths.some((hidePath) => path.startsWith(hidePath))) {
    gnbContainer.innerHTML = "";
  } else {
    gnbContainer.innerHTML = Header();
    setupHeaderEvent();
  }
}

function isLoggedIn() {
  return !!localStorage.getItem("user");
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
export default router;
