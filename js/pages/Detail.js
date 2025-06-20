import { fetchProductDetail } from "../api.js";

export default async function renderDetailPage(productId) {
  const product = await fetchProductDetail(productId);

  return `
    <main class="product-detail">
      <h1>${product.product_name}</h1>
      <img src="${product.image}" alt="${product.product_name}" />
      <p>판매자: ${product.store_name}</p>
      <p>가격: ${product.price.toLocaleString()}원</p>
      <p>상품 설명: ${product.product_info}</p>
    </main>
  `;
}
