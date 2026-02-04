// 내장함수 (반복문 -> 본인 스타일로 변경한 반복문)
// forEach 멤버함수 (화살표 함수)

/******01******forEach***********
const array = [1,2,3,4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
array.forEach((value, index, array)=>{
  console.log(`value = ${value}`);
  console.log(`index = ${index}`);
  console.log(`array = ${array}`);
  console.log(`*******************`);
});
array.forEach((value)=>{
  console.log(`${value}`);
});
 
// console.log(array);
***********************************/

/******02******map***********
 * 값이 3개 -> 변경된 값이 3개가 나와야한다.
const array = [1,2,3,4];
const newArray = [];
for (let i = 0; i < array.length; i++) {
  let value = array[i];
  value = value * 10;
  newArray.push(value);
}

console.log(array);
console.log(newArray);

let _newArray = array.map((value) => value * 10);
console.log(_newArray);
***********************************/

/******03******filter***********
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환 
let array = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 
let newArray = [];
for (let i = 0; i < array.length; i++) {
  let item = array[i];
  if(item.hobby === "테니스"){
    newArray.push(item);
  }
}

let newArray2 = array.filter((value)=>
  value.hobby === "테니스"
);

console.log(array);
console.log(newArray2);
// const tennisPeople = array.filter( 
// (item) => item.hobby === "테니스" 
// ); 
// Console.log(tennisPeople);
   
// [{ name: "구길동", hobby: "테니스" }, { name: "저길동", hobby: "테니스" }] 배열이 출력됨. 

***********************************/

/******04******find, findIndex***********
let array = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
];

let findItem = null;
for (let i = 0; i < array.length; i++) {
  let item = array[i];
  if(item.hobby === "테니스"){
    findItem = item;
    break;
  };
}
//console.log(findItem);

let findItem2 = array.find((value)=>value.hobby === "독서");
let findIndex = array.findIndex((value)=>{value.hobby === "독서"});
let findIndex2 = array.indexOf({name: "구길동", hobby: "테니스"});

console.log(findIndex2);
***********************************/

/******05******slice***********
let array = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
{ name: "홍길동1", hobby: "독서1" }, 
{ name: "홍길동2", hobby: "독서2" }, 
{ name: "홍길동3", hobby: "독서3" }
];
let newArray = array.slice(0,3);

console.log(newArray);
***********************************/

/******06******concat***********
let array = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
];

let array2 = [ 
{ name: "홍길동1", hobby: "독서1" }, 
{ name: "홍길동2", hobby: "독서2" }, 
{ name: "홍길동3", hobby: "독서3" }
];

let newArray = array.concat(array2);
console.log(newArray);
***********************************/

/******07******sort, reverse***********
// 배열을 사전순으로 내림차순 정렬하는 메서드 
// 자바스크립트는 문자단위로 정렬한다.
// 숫자단위로 정렬하면 문제발생한다.
let array = [0,1,3,2,10,30,20]; 
console.log(array);
array.sort((num1, num2) => {
  return num1 - num2;
});

// 문자단위로 정렬하면 문제없다.
let array1 = ["ads","avv","red","glf","fgd"]; 
let array2 = array1.toSorted().reverse();
console.log(array2);
***********************************/

/******08******joined, split***********
const arr6 = ["김동진","님","안녕하세요","반가워요"]; 
const joined = arr6.join("=="); 
console.log(joined); 

const array = joined.split("==");
console.log(array);
***********************************/