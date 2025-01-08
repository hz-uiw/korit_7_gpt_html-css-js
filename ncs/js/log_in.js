let userInputDatas = {
    username: "",
    password: "",
}

function setInputsEvent2() {
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    usernameInput.onkeyup = handleLoginInputOnChange;
    passwordInput.onkeyup = handleLoginInputOnChange;
}

function setButtonEvent2() {
    const loginBtn = document.querySelector(".login-button > button");
    loginBtn.onclick = handleLoginBtnOnClick;
}

function handleLoginBtnOnClick() {
    logIn();
}

function handleLoginInputOnChange(e) {
    userInputDatas = {
        ...userInputDatas,
        [e.target.name]: e.target.value,
    }
}

function logIn() {
    const userDatas = JSON.parse(localStorage.getItem("userDatas"));

    const userInfo = userDatas.find(user => user.username === userInputDatas.username && user.password === userInputDatas.password);

    if (userInfo) {
        alert("로그인 성공!");
    } else {
        alert("로그인 실패!");
    }
}

setInputsEvent2();
setButtonEvent2();