// 1. spread연산자 
let array1 = [1,2,3];
let array2 = [4,5,...array1,6,7];
let array3 = array1; // 얕은복사

let array4 = [...array1]; // 깊은복사

//console.log(array4 === array1)

// 2. 객체생성 (spread연산자 활용) 
let obj1 = { 
  a: 1, 
  b: 2, 
}; 

let obj2 ={
  as: 12,
  ...obj1,
  c: 3

}
//console.log(obj2);

// 3. 구조분해할당, 스프레드 연산자 비교
// 3.1 구조분해할당
function funcA([p1,p2,p3]){
  console.log(p1+2,p2*3,p3/4);
}
const array5 = [1,2,3];
funcA(array5);

// 3.2 spread 연산자
function funcB(p1,p2,p3){
  console.log(p1+2,p2*3,p3/4);
}
const array6 = [1,2,3];
funcB(...array6);

// 4. rest 매개변수
const array7 = [11,12,13];
function funcC(p1, ...rest) {
  console.log(p1);
  console.log(rest);
};

funcC(...array7);








