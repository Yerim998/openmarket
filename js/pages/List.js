import { fetchProductList } from "../api.js";

export default async function renderProductListPage() {
  const products = await fetchProductList();

  const productItems = products
    .map(
      (product) => `
    <li>
      <article>
        <img src="${product.image}" alt="${product.name}" />
				<p>${product.info}</p>
        <h2>${product.name}</h2>
        <span>${product.price.toLocaleString()}원</span>
      </article>
    </li>
  `
    )
    .join("");

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
			${productItems}
    </ul>
    </section>
		</main>
  `;
}
