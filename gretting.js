const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  //기본동작 차단 후 사용자 이름 기억하게 만들기
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();

//local storage: 작은 자바 스크립트 정보를 User의 컴퓨터에 저장하는 방법