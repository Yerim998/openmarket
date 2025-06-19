export function setSessionUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function getSessionUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

export function isLoggedIn() {
  return !!getSessionUser();
}

export function clearSession() {
  localStorage.removeItem("currentUser");
}
