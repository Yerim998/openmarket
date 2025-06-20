import { fetchProductDetail } from "../api.js";

export default async function renderDetailPage(productId) {
  const product = await fetchProductDetail(productId);

  return `
	<main class="product-detail-page">
		<div class="product-detail-container">

			<!-- 왼쪽: 상품 이미지 -->
			<div class="product-image">
				<img src="${product.image}" alt="${product.product_name}">
			</div>

			<!-- 오른쪽: 상품 정보 -->
			<div class="product-info">
				<div class="store-name">${product.store_name}</div>
				<h1 class="product-name">${product.product_name}</h1>
				<div class="price">${product.price.toLocaleString()}원</div>
				<div class="delivery-info">${product.shipping_method} / ${
    product.shipping_fee === 0
      ? "무료배송"
      : product.shipping_fee.toLocaleString() + "원 배송비"
  }</div>

				<div class="quantity-selector">
					<button class="minus">-</button>
					<span class="quantity">1</span>
					<button class="plus">+</button>
				</div>

				<div class="total-price">
					<span>총 상품 금액</span>
					<span class="total-amount">${product.price.toLocaleString()}원</span>
				</div>

				<div class="purchase-buttons">
					<button class="buy-now">바로 구매</button>
					<button class="add-cart">장바구니</button>
				</div>
			</div>

		</div>

		<!-- 하단 탭 메뉴 -->
		<div class="product-tabs">
			<button class="active">버튼</button>
			<button>리뷰</button>
			<button>Q&A</button>
			<button>반품/교환정보</button>
		</div>
	</main>
  `;
}
