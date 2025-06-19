export function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

export function saveUser(userData) {
  const users = getUsers();
  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));
}

export function isDuplicatedId(id) {
  return getUsers().some((user) => user.id === id);
}

export function isDuplicatedPhone(phone) {
  return getUsers().some((user) => user.phone === phone);
}

// 로그인 검증
export function validateUser(id, pw) {
  return getUsers().find((user) => user.id === id && user.pw === pw);
}
