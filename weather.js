//API는 특정 웹사이트로부터 데이터를 얻거나, 컴퓨터(Machines) 끼리 소통하기 위해 고안 되었다.
//날씨 API: https://home.openweathermap.org/
const API_KEY = "6ceae469da795d09a2a32097553e3610"
const COORDS = 'coords';

function getWeather(lat, lon){
  //데이터를 얻기 위해선 fetch를 사용한다. (fetch() 안에는 가져올 데이터가 들어가면 된다.))
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//navigator API 사용 시 좌표를 가져오는데 성공했을때를 반환 하는 함수
function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude)
}

function handleGeoError(){
  console.log("Can't access geo location");
}

function askForCoords(){
  //navigator API 사용
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  }else{
    // getWeather
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){
  loadCoords();
}

init();