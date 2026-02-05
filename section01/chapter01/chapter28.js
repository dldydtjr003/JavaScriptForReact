/*
console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(3);
*/

// 함수 선언식
/* 1번방식 2초후에 벌어질 이벤트처리
   이벤트 : 시간이 2초가 지나면 - setTimeout(handler, 시간 이벤트)
   이벤트처리(핸들러 함수)
function task(a,b){
  setTimeout(() => {
    let sum = a+b;
    console.log(`a+b = ${sum}`);
}, 2000);
}
task(10,20);
*/

// 함수 선언식
/* 2번방식 2초후에 벌어질 이벤트처리
   이벤트 : 시간이 2초가 지나면 - setTimeout(handler, 시간 이벤트)
   이벤트처리(핸들러 함수 (화살표함수))
let callbackA =((sum)=>{
  console.log(`a+b = ${sum}`);
});
function task(a,b,callbackA){
  setTimeout(() => {
    let sum = a+b;
    callbackA(sum);
}, 2000);
}

task(10,20,(sum)=>{console.log(sum)});
*/

// 3번방식 2초후에 벌어질 이벤트처리 (추후 재활용 할 때 함수를 고치지 않아도 괜찮아서 자주 사용된다.)
//   이벤트 : 시간이 2초가 지나면 - setTimeout(handler, 시간 이벤트)
//   이벤트처리(핸들러 함수 (화살표함수))
// function task(a,b,callbackA){
//   setTimeout(() => {
//     callbackA(a,b);
// }, 2000);
// }

// task(10,20,(a,b)=>{console.log(a+b+100)});

// 1단계 음식을 주문하는 상황
// 이벤트 : 음식을 주문하면 3초후에
// 핸들러 : 음식이 완성이 되어서 나옴
function orderFood(food, callback){
  console.log(`${food}가 주문`);
  setTimeout(() => {
    callback(food)
  }, 3000);
}
//orderFood("떡볶이",(food)=>console.log(`${food}가 완성`));

// 1단계 음식을 차갑게 요청하는 상황
function coolFood(food, callback){
  console.log(`${food} 차갑게 요청`);
  setTimeout(() => {
    callback(food)
  }, 3000);
}
//coolFood("떡볶이",(food)=>console.log(`${food} 차갑게 완성`));

// 1단계 음식을 냉동시키는 상황
function iceFood(food,callback){
  console.log(`${food} 냉동요청`)
  setTimeout(() => {
    callback(food);
  }, 3000);
}

//iceFood("떡볶이",(food)=>console.log(`${food} 냉동 완성`));

// 2단계 떡볶이 요청, 떡볶이 차갑게 요청, 떡볶이 냉동 요청

// orderFood("떡볶이",(food)=>{
//   console.log(`${food}가 완성`)
//   coolFood(food,(food)=>{console.log(`${food} 차갑게 완성`)})  
// });

orderFood("떡볶이",(food)=>{
  console.log(`${food}가 완성`)
  coolFood(food,(food)=>{
    console.log(`${food} 차갑게 완성`)
    iceFood(food,(food)=>console.log(`${food} 냉동 완성`));
  })  
});





