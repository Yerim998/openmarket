import { loginAPI } from "../api.js";
import { setSessionUser } from "../data/session.js";

export function setupLoginTabToggle() {
  const tabButtons = document.querySelectorAll(".tab button");
  const loginContainer = document.querySelector(".login-container");

  if (!tabButtons || !loginContainer) return;

  function attachFormEvent() {
    const form = loginContainer.querySelector("#login-form");
    const idInput = form.querySelector('input[type="text"]');
    const pwInput = form.querySelector('input[type="password"]');
    const errorMsg = form.querySelector("#login-error");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = idInput.value.trim();
      const password = pwInput.value.trim();

      errorMsg.style.display = "none";
      errorMsg.innerText = "";

      if (!username) {
        errorMsg.innerText = "아이디를 입력해주세요.";
        errorMsg.style.display = "block";
        idInput.focus();
        return;
      }

      if (!password) {
        errorMsg.innerText = "비밀번호를 입력해주세요.";
        errorMsg.style.display = "block";
        pwInput.focus();
        return;
      }

      try {
        const data = await loginAPI({ username, password });

        sessionStorage.setItem("token", data.token);
        setSessionUser({ username, token: data.token });

        //페이지 이동하기
        const prevPath = sessionStorage.getItem("prevPath") || "#/";
        location.hash = prevPath.replace("#", "");
        sessionStorage.removeItem("prevPath");
      } catch (error) {
        errorMsg.innerText = error.message || "아이디와 비밀번호가 틀렸어요.";
        errorMsg.style.display = "block";
      }
    });
  }

  //로그인 폼 html렌더링
  const renderForm = (userType) => {
    loginContainer.innerHTML = `
      <form id="login-form" class="login-form" data-type="${userType}">
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <p class="error-msg" id="login-error" style="display: none;"></p>
        <button type="submit">로그인</button>
      </form>
    `;
    attachFormEvent();
  };

  renderForm("buyer");

  // 탭 버튼 전환
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const userType = btn.dataset.type;
      renderForm(userType);
    });
  });
}
