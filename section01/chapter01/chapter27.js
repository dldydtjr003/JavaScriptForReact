// 1. 사용자 정의된 객체 생성
let obj1 = {
  name : "홍길동",
  age : 20,
}
let obj2 = {...obj1} ;
console.log(obj2);
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));