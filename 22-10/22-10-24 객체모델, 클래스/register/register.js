const userid = document.querySelector(`#userid`);
const pwd1 = document.querySelector(`#pwd1`);
const pwd2 = document.querySelector(`#pwd2`);
const level = document.querySelector(`#level`);
const fullname = document.querySelector(`#fullname`);
const email = document.querySelector(`#email`);
const tel = document.querySelector(`#tel`);
const submitButton = document.querySelector(`#submit_button`);

submitButton.addEventListener(`click`, function(){
    //공통적인 확인 : 공백인가 아닌가.(required 여부)

     
    // 아이디: 공백여부 / 중복여부
    // 비밀번호: 공백여부 / 특수문자, 문자, 숫자 포함 형태의 8~15자리를 확인
    // 비밀번호확인: 공백여부 / 비밀번호와 같은지 안같은지
    // 이름: 공백여부
    // 메일주소: 공백여부 / 메일형식에 맞는지(abcd@test.com)
    // 연락처(필수값 X): 전화번호 형식이 일치하는지(000-1111-1234)

})
// 각각 확인하는 함수 만들기.
        // function idConfirm() {}
        // function pwd1Confirm() {}
        // function pwd2onfirm() {}
        // function fullnameConfirm() {}
        // function emailConfirm() {}
        // function telConfirm() {}

function idConfirm() {
    if (!userid.value) {
        
    }
}

function pwd1Confirm() {}
function pwd2onfirm() {}
function fullnameConfirm() {}
function emailConfirm() {}
function telConfirm() {}