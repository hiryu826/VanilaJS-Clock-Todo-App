const body = document.querySelector("body");

const IMG_NUMBER = 6;
 
//function handleImgLoad(){
//  console.log("finished loading");
//}

function paintImage(imgNumber){
  const image = new Image();
  image.src = `${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  //body.appendChild(image);
  body.prepend(image);

  //API 사용 시 로딩 기능 사용가능
  //image.addEventListener("loadend", handleImgLoad)
}

//Javascript에서 random numbers 생성 방법(math 함수 사용)
function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();