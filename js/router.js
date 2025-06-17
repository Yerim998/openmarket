import LoginPage from "./pages/LoginPage.js";
import SignUp from "./pages/SignUp.js";
import { setupLoginTabToggle } from "./pages/LoginTab.js";

const routes = {
  "/": LoginPage,
  "/signup": SignUp,
};

function parseLocation() {
  return location.hash.slice(1).toLowerCase() || "/";
}

// function router() {
//   const path = parseLocation();
//   const render = routes[path] || LoginPage;
//   document.getElementById("app").innerHTML = render();
// }

window.addEventListener("hashchange", router);
export default router;

function router() {
  const path = parseLocation();
  const render = routes[path] || LoginPage;
  document.getElementById("app").innerHTML = render();

  if (path === "/") {
    setupLoginTabToggle();
  }
}
