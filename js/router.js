import LoginPage from "./pages/LoginPage.js";
import SignUp from "./pages/SignUp.js";
import { setupLoginTabToggle } from "./pages/LoginTab.js";
import List from "./pages/List.js";
import Header from "./components/Header.js";

const routes = {
  "/": LoginPage,
  "/signup": SignUp,
  "/List": List,
};
//주소 찾기
function parseLocation() {
  return location.hash.slice(1).toLowerCase() || "/";
}

window.addEventListener("hashchange", router);
export default router;

function router() {
  const path = parseLocation();
  const render = routes[path] || LoginPage;

  //메인 콘텐츠(app)
  document.getElementById("app").innerHTML = render();

  //gnb등장조건
  const gnbContainer = document.getElementById("gnb");
  if (path !== "/") {
    gnbContainer.innerHTML = Header();
  } else {
    gnbContainer.innerHTML = ""; // 로그인 페이지에서는 GNB 제거

    //로그인 탭 토글
    if (path === "/") {
      setupLoginTabToggle();
    }
  }
}
