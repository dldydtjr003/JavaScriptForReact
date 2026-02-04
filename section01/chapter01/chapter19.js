// 클래스의 멤버변수를 반복문을 이용해서 출력
const person = { 
  name: "김동진", 
  age: 25, 
  tall: 179 
};
const personKey = Object.keys(person);
console.log(personKey);

for (let index = 0; index < personKey.length; index++) {
  const key = personKey[index];
  console.log(`${key} = ${person[key]}`);
}

const valueArray = Object.values(person);
for (let index = 0; index < valueArray.length; index++) {
  console.log(`${valueArray[index]}`)
  
}