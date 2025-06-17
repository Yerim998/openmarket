export default function LoginPage() {
  return `
  <section class="login">
    <h1 class="logo">getti</h1>
    <div class="tab">
      <button class="active">구매회원 로그인</button>
      <button>판매회원 로그인</button>
    </div>
    <form>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <button type="submit">로그인</button>
    </form>
    <div class="footer-link">
      <a href="#/signup">회원가입</a> | <a href="#">비밀번호 찾기</a>
    </div>
  </section>
	`;
}
