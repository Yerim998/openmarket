export function setupTabToggle(tabSelector, renderForm) {
  const tabButtons = document.querySelectorAll(tabSelector);

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const userType = btn.dataset.type;
      renderForm(userType);
    });
  });
}
