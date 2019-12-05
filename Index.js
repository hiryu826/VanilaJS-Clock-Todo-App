const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"

function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}

function init(){
    title.addEventListener("mouseenter", handleClick);
}

init();

// 20191028
// console.log('My name is Ryu Se Hyun, I can do it');

// const Num = 100 * 100;
// let a = 'Ryu';
// let b = a + 'Sehyun'; 
// a = 100;
// console.log(Num, b, a); 

// // Array: 텍스트, true, false, numbers, floats 등만 사용 가능
// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// const hyunInfo = {
//     Name: "Sehyun",
//     Age: 28,
//     Gender: "Male",
//     Married: true
// };

// console.log(daysOfWeek);
// console.log(daysOfWeek[2]);
// console.log(hyunInfo.Name);

/* String(문자열 - Text/모든걸 같이 붙인다.)
const what = "String"
console.log(what);*/

/* Boolean(True or False - 모두 소문자로 쓴다)
const what = true; // true=1, false=0*/

/* Number(숫자)
const what=123;*/

/* Float(floating number / 소숫점)
const what = 12.3;*/
