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
    throw new Error(errorData.message || "로그인 실패");
  }

  const data = await response.json();
  return data;
}
