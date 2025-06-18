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

        <!-- 구매회원가입 폼 -->
        <form id="signup-form" class="signup-form" data-type="buyer">
          <label>아이디</label>
          <div class="id-check">
            <input type="text" placeholder="아이디" />
            <button type="button" class="check-btn">중복확인</button>
          </div>

          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호" />

          <label>비밀번호 재확인</label>
          <input type="password" placeholder="비밀번호 재확인" />

          <label>이름</label>
          <input type="text" placeholder="이름" />

          <label>휴대폰번호</label>
          <div class="phone-group">
            <select>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </select>
            <input type="text" placeholder="앞자리" />
            <input type="text" placeholder="뒷자리" />
          </div>

          <div class="agreement">
            <label>
              <input type="checkbox" id="agree" />
              호두샵 이용약관 및 개인정보처리방침에 동의합니다.
            </label>
          </div>

          <button type="submit" class="submit-btn" disabled>가입하기</button>
        </form>

      </div>
    </div>
  </section>
  `;
}
