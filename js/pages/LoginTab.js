export function setupLoginTabToggle() {
  const tabButtons = document.querySelectorAll(".tab button");
  const loginContainer = document.querySelector(".login-container");

  if (!tabButtons || !loginContainer) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // active 클래스 토글
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const userType = btn.dataset.type;

      loginContainer.innerHTML = `
        <form id="login-form" class="login-form" data-type="${userType}">
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <button type="submit">로그인</button>
        </form>
      `;
    });
  });
}
