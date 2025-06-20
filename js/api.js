const BASE_URL = "https://api.wenivops.co.kr/services/open-market";

export async function loginAPI({ username, password }) {
  const response = await fetch(`${BASE_URL}/accounts/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "아이디와 비밀번호가 틀렸어요.");
  }

  const data = await response.json();
  return data;
}

export async function signupAPI(userData) {
  const response = await fetch(`${BASE_URL}/accounts/signup/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "회원가입에 실패했습니다.");
  }

  return await response.json();
}

export async function fetchProductList() {
  const response = await fetch(
    "https://api.wenivops.co.kr/services/open-market/products/"
  );

  if (!response.ok) {
    throw new Error("상품 목록을 불러오지 못했습니다.");
  }

  const data = await response.json();
  return data.results;
}
