import router from "../router.js";
import { signupAPI } from "../api.js";
import {
  isDuplicatedId,
  isDuplicatedPhone,
  saveUser,
  getUsers,
} from "../data/userStorage.js";

export function setupSignUpEvent() {
  const form = document.querySelector("#signup-form");

  const idInput = form.querySelector("#idInput");
  const idCheckBtn = form.querySelector(".check-btn"); //중복확인버튼
  const pwInput = form.querySelector("#pwInput"); //비밀번호입력
  const confirmPwInput = form.querySelector("#confirmPwInput");
  const nameInput = form.querySelector("#nameInput");
  const phoneNum = form.querySelector(".phoneNum");
  const phoneMid = form.querySelector("#phoneMid");
  const phoneEnd = form.querySelector("#phoneEnd");

  const agreeCheckbox = form.querySelector("#agree"); //체크박스
  const submitBtn = form.querySelector(".submit-btn"); //가입버튼

  //포커스 및 이벤트 요소
  const idError = form.querySelector("#id-error");
  const pwError = form.querySelector("#pw-error");
  const confirmError = form.querySelector("#confirm-error");
  const phoneError = form.querySelector("#phone-error");
  const pwIcon = form.querySelector("#pw-icon");
  const confirmIcon = form.querySelector("#confirm-icon");

  let idValid = false,
    pwValid = false,
    pwConfirmValid = false,
    phoneValid = false;

  //아이디 중복 확인
  idCheckBtn.addEventListener("click", () => {
    const id = idInput.value.trim();
    idError.style.display = "block";
    idError.style.color = "#eb5757";

    //id 정규식
    if (!/^[a-zA-Z0-9]{8,20}$/.test(id)) {
      idError.innerText = "8~20자 이내의 영문 대소문자, 숫자만 사용 가능해요";
      return;
    }

    const users = getUsers();
    const isDuplicate = users.some((user) => user.id === id);

    if (isDuplicate) {
      idError.innerText = "이미 사용중인 아이디입니다.";
      idValid = false;
    } else {
      idError.innerText = "멋진 아이디네요 :)";
      idError.style.color = "green";
      idValid = false;
    }
    updateSubmitBtn();
  });
  //아이디 확인 끝

  //패스워드 확인
  pwInput.addEventListener("input", () => {
    const pw = pwInput.value.trim();
    pwError.style.display = "block";

    if (!pw) {
      pwError.innerText = "필수 정보입니다.";
      pwError.style.display = "block";
      pwInput.classList.add("input-error");
      pwValid = false;
      return;
    }

    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/.test(pw)) {
      pwError.innerText =
        "8~20자의 영문 대소문자, 숫자, 특수문자를 사용해주세요.";
      pwIcon.classList.remove("valid");
      pwInput.classList.add("input-error");
      pwValid = false;
    } else {
      pwError.style.display = "none";
      pwIcon.classList.add("valid");
      pwInput.classList.remove("input-error");
      pwValid = true;
    }
    updateSubmitBtn();
  });

  //패스워드 재확인
  confirmPwInput.addEventListener("input", () => {
    const pw = pwInput.value.trim();
    const confirmPw = confirmPwInput.value.trim();
    confirmError.style.display = "block";

    if (!pw) {
      pwError.innerText = "필수 정보입니다.";
      pwError.style.display = "block";
      pwInput.classList.add("input-error");
      pwValid = false;
      return;
    }

    if (pw !== confirmPw) {
      confirmError.innerText = "비밀번호가 일치하지 않습니다.";
      confirmIcon.classList.remove("valid");
      confirmPwInput.classList.add("input-error");
      pwConfirmValid = false;
      updateSubmitBtn();
      return;
    } else {
      confirmError.style.display = "none";
      confirmIcon.classList.add("valid");
      confirmPwInput.classList.remove("input-error");
      pwConfirmValid = true;
    }
    updateSubmitBtn();
  });

  //전화번호 유효성 검사
  function onlyNum(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); //숫자만 남기고 삭제
  }

  function checkPhone() {
    const phone = phoneNum.value + phoneMid.value + phoneEnd.value;
    phoneError.style.display = "block";
    phoneError.style.color = "#eb5757";

    if (dummyPhones.includes(phone)) {
      phoneError.innerText = "해당 전화번호는 이미 존재합니다.";
      phoneMid.classList.add("input-error");
      phoneEnd.classList.add("input-error");
      phoneValid = false;
    } else {
      phoneError.style.display = "none";
      phoneMid.classList.remove("input-error");
      phoneEnd.classList.remove("input-error");
      phoneValid = true;
    }
    updateSubmitBtn();
  }

  phoneNum.addEventListener("change", checkPhone);
  phoneMid.addEventListener("input", (e) => {
    onlyNum(e);
    checkPhone();
  });
  phoneEnd.addEventListener("input", (e) => {
    onlyNum(e);
    checkPhone();
  });

  agreeCheckbox.addEventListener("change", () => {
    if (agreeCheckbox.checked) {
      form.querySelector(".check-agree").classList.add("active");
    } else {
      form.querySelector(".check-agree").classList.remove("active");
    }
    updateSubmitBtn();
  });

  function updateSubmitBtn() {
    if (
      idValid &&
      pwValid &&
      pwConfirmValid &&
      phoneValid &&
      agreeCheckbox.checked
    ) {
      submitBtn.classList.add("active");
      submitBtn.disabled = false;
    } else {
      submitBtn.classList.remove("active");
      submitBtn.disabled = true;
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (
      idValid &&
      pwValid &&
      pwConfirmValid &&
      phoneValid &&
      agreeCheckbox.checked
    ) {
      const userData = {
        username: idInput.value.trim(),
        password: pwInput.value.trim(),
        name: nameInput.value.trim(),
        phone: phoneNum.value + phoneMid.value + phoneEnd.value,
      };

      try {
        await signupAPI(userData);
        alert("회원가입이 완료되었습니다.");
        location.hash = "#/login";
        router();
      } catch (error) {
        alert(error.message || "회원가입에 실패했습니다.");
      }
    }
  });
}
