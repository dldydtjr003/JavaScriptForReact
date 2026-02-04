// 구조분해할당 -> 배열/ 분해/ 할당(변수에 저장) 배열을 분해를 해서 변수에 저장한다.
let array = [1,2,3];
let one = array[0];
let twe = array[1];
let three = array[2];

let [_one,_two,_three = 10, four = 4] = array;
console.log(_one);
console.log(_two);
console.log(_three);
console.log(four);

// 구조분해할당 -> 객체/ 분해/ 할당(변수에 저장) 배열을 분해를 해서 변수에 저장한다.
 let person = { 
  name: "홍길동", 
  age: 27, 
  hobby: "테니스", 
}; 

let person3 = person;
console.log(person3 === person);


let {
  age : myAge,
  name ,
  hobby : myHobby,
  extra = "hello"
} = person;

let myAge2 = person.age;

console.log(myAge, name, myHobby, extra);