// async, await 방식 => promise
async function getData(){
  return {name: "lee", age: 30}
}

function getData2(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let flag = true;
      if(flag){
        resolve({name: "lee", age: 30});
      }else{
        reject("비동기 처리 요청실패");
      }
    }, 1000);
  })
}
//console.log(getData2())

async function printData(){
  getData2().then((value)=>console.log(value))
}
//printData();

async function printData2(){
  const data = await getData2()
  console.log(data)
}
printData2()