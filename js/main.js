import router from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
  if (!location.hash) {
    location.hash = "/";
  }
  router();
});
