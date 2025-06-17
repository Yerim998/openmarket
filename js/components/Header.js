export default function GNB() {
  return `
    <header class="gnb">
      <h1 class="logo">
        <a href="#/">
          <img src="./assets/getti.svg" alt="getti 로고" />
        </a>
      </h1>
      <nav class="nav-menu">
        <ul>
          <li><a href="#/">홈</a></li>
          <li><a href="#/cart">장바구니</a></li>
          <li><a href="#/login">로그인</a></li>
        </ul>
      </nav>
    </header>
  `;
}
