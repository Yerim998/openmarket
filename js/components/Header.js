export default function Header() {
  return `
<header class="gnb">
      <h1 class="sr-only">getti</h1>
      <div class="gnb-content">
        <a href="#/" aria-label="getti 홈으로 이동하기" class="gnbLogo">
          <img src="./assets/getti.svg" alt="getti" />
        </a>
        <div class="search">
          <input
            class="gnbInput"
            type="text"
            placeholder="상품을 검색해보세요!" />
          <button class="searchBtn" aria-label="검색하기">
            <img src="./assets/search.svg" alt="검색" />
          </button>
        </div>
        <nav class="icons">
          <a href="#cart" aria-label="장바구니">
            <span class="cart"></span>
            <span class="iconSpan">장바구니</span>
          </a>
          <a href="#mypage" aria-label="마이페이지">
            <span class="mypage"></span>
            <span class="iconSpan">마이페이지</span>
          </a>
        </nav>
      </div>
    </header>
  `;
}

export function setupHeaderEvent() {
  const input = document.querySelector(".gnbInput");
  const searchBtn = document.querySelector(".searchBtn");

  function handleSearch() {
    const keyword = input.value.trim();
    if (keyword) {
      console.log(`검색어: ${keyword}`);
      // 검색 결과 페이지로 이동
    } else {
      alert("검색어를 입력하세요!");
    }
  }

  // 클릭 or Enter
  searchBtn?.addEventListener("click", handleSearch);
  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  });
}
