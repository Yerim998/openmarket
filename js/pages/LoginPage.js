export default function renderLoginPage() {
  return `
  <section class="loginPage">
    <h1 class="logo">
      <a href="#/" aria-label="getti 홈으로 이동하기">
			<img src="./assets/getti.svg" alt="getti" />
			</a>
    </h1>


    <div class="box">
      <div class="tab">
        <button class="active" data-type="buyer">구매회원 로그인</button>
        <button data-type="seller">판매회원 로그인</button>
      </div>

			<div class="login-container">
			</div>


		<div class="footer-link">
				<a href="#signup">회원가입</a> | <a href="#">비밀번호 찾기</a>
			</div>
    </div>
  </section>
	`;
}
