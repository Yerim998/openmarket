export function setupSignUpEvent() {
  const form = document.querySelector("#signup-from");
  const idInput = form.querySelector("input[type='text']");
  const idCheckBtn = form.querySelector(".check-btn");//중복확인버튼
  const passwordInput = form.querySelector("input['type=password']");//비밀번호입력
  const confirmPwInput = form.querySelectorAll("input[type='password']")[1]; //inputtext중 2번째(1)
  const agreeCheckbox = form.querySelector("#agree");//체크박스
	const submitBtn = form.querySelector(".submit-btn");//가입하기

	let idValid = false; //아이디 유효성

	//중복확인
	idCheckBtn.addEventListener("click", () => {
		const idValue = idInput.value.trim();
		if (idValue === "") {
			
		}
	})
}
