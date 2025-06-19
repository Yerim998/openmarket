export function setupLoginTabToggle() {
  const tabButtons = document.querySelectorAll(".tab button");
  const loginContainer = document.querySelector(".login-container");

  if (!tabButtons || !loginContainer) return;

  function attachFormEvent() {
    const form = loginContainer.querySelector("#login-form");
    const idInput = form.querySelector('input[type="text"]');
    const pwInput = form.querySelector('input[type="password"]');
    const errorMsg = form.querySelector("#login-error");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const id = idInput.value.trim();
      const pw = pwInput.value.trim();

      errorMsg.style.display = "none";
      errorMsg.innerText = "";

      if (!id) {
        errorMsg.innerText = "아이디를 입력해주세요.";
        errorMsg.style.display = "block";
        idInput.focus();
        return;
      }

      if (!pw) {
        errorMsg.innerText = "비밀번호를 입력해주세요.";
        errorMsg.style.display = "block";
        pwInput.focus();
        return;
      }

      // ⭐⭐⭐ 임시 더미 아이디
      const dummyId = "test1234";
      const dummyPw = "test234";

      if (id !== dummyId || pw !== dummyPw) {
        errorMsg.innerText = "아이디 또는 비밀번호가 일치하지 않습니다.";
        errorMsg.style.display = "block";
        return;
      }

      // localStorage 저장
      localStorage.setItem("user", id);
      // 로그인 성공 시 페이지 이동
      const prevPath = sessionStorage.getItem("prevPath") || "#/";
      location.hash = prevPath.replace("#", "");
      sessionStorage.removeItem("prevPath");
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
