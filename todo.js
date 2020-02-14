// local storage 에는 JS의 Data를 저장할 수 없으며, 오직 string만 저장할 수 있다. (JSON.stringify 사용 이유)
// JSON: JavaScript Object Notation((데이터를 전달할 때 자바스크립트가 그것을 다룰 수 있도록 object/string 으로 바꿔주는 기능/유틸리티)

//HTML 내에서 무엇인가를 요청
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; //todolist 생성 시 배열에 추가 시키기 위해 생성

function deleteToDo(){
  //console.dir/log(event.target.parentNode);
  //HTML toDos 삭제
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  //local storage toDos 삭제
   //filter는 각각의 함수 하나를 실행 시킨다. (각각의 item과 함께 실행)
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos(){
  //JSON.stringify는 자바스크립트 object를 string으로 바꿔 준다.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
  //HTML 내 무엇인가를 생성(비어있는 li 생성)
  const li = document.createElement("li");
  //button 생성
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  
  //span 생성
  const span = document.createElement("span");
  span.innerText = text; //text: handleSubmit 가지고 온 값
  
  const newId = toDos.length + 1;

  //button, span li에 append
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;

  //li를 ul에 append
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  }
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    //Array에 담겨있는 것들 각각에 한번 씩 함수를 실행 시켜 준다.(toDos를 가져온 뒤, 가져온 것을 자바스크립트 object로 변환(parse) 해준 후 각각에 대해서 paintToDo라는 function이 실행 됨)

    //forEach는 Array를 위한 함수(string, object를 위한 함수도 존재함)
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text); 
    })
  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
}

init();