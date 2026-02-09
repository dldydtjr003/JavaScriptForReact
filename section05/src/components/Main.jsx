export default function Main(){
  let num = 9;
  const obj = {name: "ohjh", age: 30};
  const array = ["강아지", "고양이", "거북이"];
  let test;

  return (
  <>
  <main>
    <h1>MAIN 영역</h1>
    <h3>number({num}) = {num % 2 === 0 ? '짝수' : '홀수'}</h3>
    <h3>상수 = {10}</h3>
    <h3>num = {num}</h3>
    <h3>array[0,1,2] = {array}</h3>
    <h3>obj.name = {obj.name}</h3>
    <h3>undefined = {undefined}</h3>
    <h3>null = {null}</h3>
    <h3>null병합 test = {test ?? 999}</h3>
    <h3>true = {true}</h3>
    <h3>false = {false}</h3>
  </main>
  </>
  )
}