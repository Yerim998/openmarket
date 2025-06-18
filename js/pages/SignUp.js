export default function SignUp() {
  return `
  <section class="signUpPage">
    <h1 class="logo">
      <a href="#/" aria-label="getti 홈으로 이동하기">
        <img src="./assets/getti.svg" alt="getti" />
      </a>
    </h1>

    <div class="box">
      <div class="tab">
        <button class="active" data-type="buyer">구매회원가입</button>
        <button data-type="seller">판매회원가입</button>
      </div>

      <div class="signup-container">

        <form id="signup-form" class="signup-form" data-type="buyer">

          <label>아이디</label>
          <div class="id-check">
            <input type="text" placeholder="" id="idInput" />
            <button type="button" class="check-btn">중복확인</button>
            </div>
						<p class="error-msg" id="id-error"></p>

						<label>비밀번호</label>
						<div class="pw-box">
							<input type="password" placeholder=""  id="pwInput" />
							<span class="pw-icon"></span>
						</div>
						<p class="error-msg" id="pw-error"></p>

          <label>비밀번호 재확인</label>
					<div class="pw-box">
          <input type="password" id="confirmPwInput" placeholder="" />
					<span class="pw-icon"></span>
					</div>
					<p class="error-msg" id="confirm-error"></p>

          <label>이름</label>
          <input type="text" placeholder=""  id="nameInput" />

          <label>휴대폰번호</label>
          <div class="phoneGroup">
            <select class="phoneNum">
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </select>
            <input type="text" placeholder="" id="phoneMid" maxlength="4" />
            <input type="text" placeholder="" id="phoneEnd" maxlength="4" />
          </div>
					<p class="error-msg" id="phone-error"></p>

          <div class="agreement">
            <label class="check-agree">
              <input type="checkbox" id="agree" />
								게티마켓 이용약관 및 개인정보처리방침에 동의합니다.
            </label>
          </div>

          <button type="submit" class="submit-btn" disabled>가입하기</button>
        </form>
      </div>
    </div>
  </section>
  `;
}
