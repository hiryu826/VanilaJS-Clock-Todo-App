const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const seconds = date.getSeconds();

  //3항 연산자 활용
  clockTitle.innerText = 
  `${hour < 10 ? `0${hour}`:hour}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;
}

function init(){
  getTime();
  //setInterval: 첫 번째 인자 값을 두 번째 인자 값 시간마다 실행한다. 
  setInterval(getTime, 1000);
}

init();