/*
let task = function (){
  setTimeout(() => {
    console.log("안녕")
    if(true){
      //resolve 상태
    }else{
      //reject 상태
    }
  }, 3000);
}
// task();
*/
// pending 상태
/*
let promise = new Promise(()=>{
  setTimeout(() => {
    console.log("안녕")
    if(true){
      //resolve 상태
    }else{
      //reject 상태
    }
  }, 3000);
});

//console.log(promise);
*/
// resolve 상태 
/*
let promise2 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log("안녕")
    if(true){
      resolve("promise 안녕")
    }else{
      //reject 상태
    }
  }, 2000);
});

setTimeout(() => {
  console.log(promise2);
}, 3000);
*/

/*
// reject 상태
let promise3 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log("안녕3")
    if(false){
      resolve("promise 성공")
    }else{
      reject("promise 실패")
    }
  }, 2000);
});

setTimeout(() => {
  console.log(promise3);
}, 3000);
*/

//4. Promise 를 실제로 활용해보자. 
/*
const promise4 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = "10"; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
 
setTimeout(() => { 
      console.log(promise4); 
}, 3000); 
*/

// promise 성공한 후 그 결과값을 출력한다.
/*
const promise5 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = 10; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
 
// promise5가 성공하면 작동이 된다.
promise5.then((value)=> console.log(`성공 한 결과 값 = ${value}`));

// promise5가 실패하면 작동이 된다.
promise5.catch((value)=> console.log(`실패 한 결과 값 = ${value}`));

setTimeout(() => {
  console.log(promise5)
}, 2000);
*/

// promise chain 방식으로 표현한다.
/*
const promise6 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = 10; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
 
// promise6가 성공하면 작동이 된다.
promise6
  .then((value)=> console.log(`성공 한 결과 값 = ${value}`))
  .catch((value)=> console.log(`실패 한 결과 값 = ${value}`));

setTimeout(() => {
  console.log(promise6)
}, 2000);
*/

// promise 를 함수를 통해서 실행하기
function add10(num){
  const promise = new Promise((resolve, reject) => { 
    // 비동기 작업 실행하는 함수 
    // executor 
    setTimeout(() => { 
      if (typeof num === 'number') { 
        resolve(num + 10); 
      } else { 
        reject('num이 숫자가 아닙니다'); 
      } 
    }, 2000); 
  }); 
  return promise; 
};

// 1단계 
/*
let promise = add10("20");
// promise가 성공하면 작동이 된다.
promise
  .then((value)=> console.log(`성공 한 결과 값 = ${value}`))
  .catch((value)=> console.log(`실패 한 결과 값 = ${value}`));
*/
// 2단계
/*
let promise = add10(20);
promise
  .then((value)=> {
    console.log(`성공 한 결과 값 = ${value}`)
    let _promise = add10(value);
    _promise.then((value)=>{
      console.log(`성공 한 결과 값 = ${value}`)
    })
  })
  .catch((value)=> console.log(`실패 한 결과 값 = ${value}`));
  */
  // 2단계 수정
  /*
let promise = add10(20);
promise
  .then((value)=> {
    console.log(`성공 한 결과 값 = ${value}`)
    //promise return 
    return add10(value);
  })
  .then((value)=> console.log(`성공 한 결과 값 = ${value}`))
  .catch((value)=> console.log(`실패 한 결과 값 = ${value}`));
  */
   // 3단계 
   /*
add10(20)
  .then((value)=> {
    console.log(`성공 한 결과 값 = ${value}`)
    //promise return 
    return add10(value);
  })
  .then((value2)=> {
    console.log(`성공 한 결과 값 = ${value2}`)
  return add10(value2);
})
  .then((value3)=>{
    console.log(`성공 한 결과 값 = ${value3}`)
})
  .catch((value)=> console.log(`실패 한 결과 값 = ${value}`));
*/
// 음식주문 상황 callback으로 했던거 promise로 1,2,3단계로 만들기
function orderFood2(food){
  const promise = new Promise((resolve,reject)=>{
    console.log(`${food} 주문`)
    setTimeout(() => {
      let flag = true;
      if(flag){
        resolve(`${food}가 완성했습니다.`)
      }else{
        reject(`${food}가 실패했습니다.`)
      }
    }, 2000);
  })
  return promise;
}

function coolFood2(food){
  const promise = new Promise((resolve,reject)=>{
    console.log(`${food} 차갑게 주문`)
    setTimeout(() => {
      let flag = true;
      if(flag){
        resolve(`${food}가 차갑게 완성했습니다.`)
      }else{
        reject(`${food}가 차갑게 실패했습니다.`)
      }
    }, 2000);
  })
  return promise;
}

function iceFood2(food){
  const promise = new Promise((resolve,reject)=>{
    console.log(`${food} 냉동 주문`)
    setTimeout(() => {
      let flag = true;
      if(flag){
        resolve(`${food}가 냉동 완성했습니다.`)
      }else{
        reject(`${food}가 냉동 실패했습니다.`)
      }
    }, 2000);
  })
  return promise;
}
// orderFood2("떡볶이")
// .then((value)=>{
//   console.log(`${food}완료`)
// // })
// iceFood2("떡볶이")
// .then((value)=>console.log(`${food}실패`))
// .catch((value)=>console.log(`${food}실패`))

orderFood2("떡볶이")
.then((value)=> {
  console.log(value)
  return coolFood2("떡볶이");
})
.then((value2)=>{
  console.log(value2);
  return iceFood2("떡볶이");
})
.then((value3)=>{
  console.log(value3)
})
.catch((error)=>console.log(error))








