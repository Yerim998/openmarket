export function setupLoginTabToggle() {
  const tabButtons = document.querySelectorAll(".tab button");
  const loginContainer = document.querySelector(".login-container");

  if (!tabButtons || !loginContainer) return;

  const renderForm = (userType) => {
    loginContainer.innerHTML = `
      <form id="login-form" class="login-form" data-type="${userType}">
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
    `;

    const form = loginContainer.querySelector("#login-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const idInput = form.querySelector('input[type="text"]');
      const pwInput = form.querySelector('input[type="password"]');
      const id = idInput.value.trim();
      const pw = pwInput.value.trim();

      if (!id) {
        alert("아이디를 입력해주세요.");
        idInput.focus();
        return;
      }

      if (!pw) {
        alert("비밀번호를 입력해주세요.");
        pwInput.focus();
        return;
      }

      // ⭐⭐⭐임시 테스트용 더미!! 나중에 API연결 수정할 것⭐⭐⭐
      const dummyId = "test123";
      const dummyPw = "pass1234";

      if (id !== dummyId || pw !== dummyPw) {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        return;
      }

      console.log("✅ 유효성 검사 통과. 로그인 시도 중...");
    });
  };

  renderForm("buyer");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const userType = btn.dataset.type;
      renderForm(userType);
    });
  });
}
