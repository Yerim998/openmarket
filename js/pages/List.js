export default function renderProductListPage() {
  return `
	<main class="product-list-page">
	<!-- 상단 배너 -->
		<section class="banner-slider">
		<button class="prev"></button>
			<div class="slides">
				<!-- <img src="배너1.jpg" alt="배너1">
				<img src="배너2.jpg" alt="배너2">-->
			</div>
			<button class="next"></button>
		</section>

		<!-- 상품 목록 -->
    <section class="list">
		<ul class="product-grid">
			<li>
				<article>
				<img src=".." alt="상품명" />
				<h2>상품명</h2>
				<span>가격 및 정보</span>
				</article>
			</li>
			<li>
				<article>
				<img src=".." alt="상품명" />
				<h2>상품명</h2>
				<span>가격 및 정보</span>
				</article>
			</li>
			<li>
				<article>
				<img src=".." alt="상품명" />
				<h2>상품명</h2>
				<span>가격 및 정보</span>
				</article>
			</li>
			<li>
				<article>
				<img src=".." alt="상품명" />
				<h2>상품명</h2>
				<span>가격 및 정보</span>
				</article>
			</li>
			<li>
				<article>
				<img src=".." alt="상품명" />
				<h2>상품명</h2>
				<span>가격 및 정보</span>
				</article>
			</li>
			<li>
				<article>
				<img src=".." alt="상품명" />
				<h2>상품명</h2>
				<span>가격 및 정보</span>
				</article>
			</li>
    </ul>
    </section>
		</main>
  `;
}
