// 단락평가
let returnFalse = () => {
  console.log("false function");
  return false;
}
let returnTrue = () => {
  console.log("true function");
  return true;
}
console.log(returnFalse() && returnTrue());
console.log(returnTrue() || returnFalse());

// 0, null, "", undefined, false, NaN (값이 없으면 false로 취급한다.)
let test = ()=>{};
if(test) {
  console.log(`${test} = true 취급한다.`)
} else{
  console.log(`${test} =  false 취급한다.`)
};

// 단락평가 테스팅
// 함수 선언문
function name(params) {
  const name = person && person.name;
  console.log(name || "person 객체가 없습니다.");
}
printName({name:"이용석"});
