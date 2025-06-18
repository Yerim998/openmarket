export function setupSignUpEvent() {
  const form = document.querySelector("#signup-form");

  const idInput = form.querySelector("#idInput");
  const idCheckBtn = form.querySelector(".check-btn"); //중복확인버튼
  const passwordInput = form.querySelector("#pwInput"); //비밀번호입력
  const confirmPwInput = form.querySelector("#confirmPwInput");
  const nameInput = form.querySelector("#nameInput");
  const phoneSelect = form.querySelector(".phoneNum");
  const phoneMid = form.querySelector(".phoneMid");
  const phoneEnd = form.querySelector(".phoneEnd");

  const agreeCheckbox = form.querySelector("#agree"); //체크박스
  const submitBtn = form.querySelector(".submit-btn"); //가입버튼

  //포커스 및 이벤트 요소
  const idError = form.querySelector("#id-error");
  const pwError = form.querySelector(".pw-error");
  const confirmError = form.querySelector(".confirm-error");
  const phoneError = form.querySelector(".phone-error");
  const pwIcon = form.querySelector(".pw-icon");

  //아이디 mock 데이터⭐⭐⭐
  const dummyUsers = ["dummy123", "test1234"];

  //아이디 확인 시작
  idCheckBtn.addEventListener("click", () => {
    const id = idInput.value.trim();
    idError.style.display = "block";
    idError.style.color = "#eb5757";

    //id 정규식
    if (!/^[a-zA-Z0-9]{8,20}$/.test(id)) {
      idError.innerText = "8~20자 이내의 영문 대소문자, 숫자만 사용 가능해요";
      return;
    }
    //중복 및 패스
    if (dummyUsers.includes(id)) {
      idError.innerText = "이미 사용중인 아이디입니다.";
    } else {
      idError.innerText = "멋진 아이디네요 :)";
      idError.style.color = "green";
    }
  });
  //아이디 확인 끝

  //패스워드 확인 시작
  pwInput.addEventListener("input", () => {
    const pw = pwInput.value.trim();
    pwError.style.display = "block";

    if (!/^(?=.*[a-zA-z])(?=.*[0~9])(?=.*[!@#$%^&*]){8,20}$/.test(pw)) {
      pwError.innerText =
        "8~20자의 영문 대소문자, 숫자, 특수문자를 사용해주세요.";
    }
  });
}
