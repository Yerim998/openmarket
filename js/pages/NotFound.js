export default function renderNotFoundPage() {
  return `
    <section class="not-found">
      <div class="image">
        <img src="./assets/icon-404.png" alt="404">
      </div>
			<div class="not-found-text">
			<h1>페이지를 찾을 수 없습니다.</h1>
				<p>페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.<br>웹 주소가 올바른지 확인해 주세요.</p>
				<div class="buttons">
				<button onclick="location.hash = '/login'">메인으로</button>
					<button class="back-button" onclick="history.back()">이전 페이지</button>
					</div>
			</div>
    </section>
  `;
}
