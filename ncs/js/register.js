let userInputDatas = {
    id: 0,
    username: "",
    password: "",
}

function setInputsEvent() {
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    usernameInput.onkeyup = handleAccountInputOnChange;
    passwordInput.onkeyup = handleAccountInputOnChange;
}

function setButtonEvent() {
    const registerBtn = document.querySelector(".register-button > button");
    registerBtn.onclick = handleRegisterBtnOnClick;
}

function handleRegisterBtnOnClick() {
    saveUser();
}

function handleAccountInputOnChange(e) {
    userInputDatas = {
        ...userInputDatas,
        [e.target.name]: e.target.value,
    }
}

function saveUser() {
    let userDatas = !!localStorage.getItem("userDatas")
    ? JSON.parse(localStorage.getItem("userDatas")) : [];

    if(userDatas.length > 0) {
        userInputDatas.id = userDatas[userDatas.length - 1].id + 1;
    }
    userDatas = [
        ...userDatas,
        userInputDatas,
    ]
    localStorage.setItem("userDatas", JSON.stringify(userDatas));

    alert("회원가입 성공! 로그인 페이지로 이동합니다.");
    location.href = "./sign_in.html";
}


setInputsEvent();
setButtonEvent();
