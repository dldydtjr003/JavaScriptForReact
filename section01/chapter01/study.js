const person = {
  name : "이용석",
  age : 28,
  tall : 192
};
let person1 = Object.keys(person);
console.log(person1);

for (let i = 0; i < person1.length; i++) {
  const key = person1[i];
  console.log(`${person1[i]} = ${person[key]}`);
}

const array = Object.values(person);

for (let i = 0; i < array.length; i++) {
  const arrayValue = array[i];
  console.log(arrayValue)
}

//*********************************************** 

const num = [1,2,3,4];
// forEach
num.forEach(value => {
  console.log(`value = ${value}`);
});
// map
const num1 = num.map((value) => {
  let num2 = value * 10;
  console.log(num2);
});

const user = [
  {name : "이용석1", hobby :"잠자기1"},
  {name : "이용석2", hobby :"잠자기2"},
  {name : "이용석3", hobby :"잠자기3"},
];
// filter
let newArray2 = user.filter((value)=> value.hobby === "잠자기2");
console.log(newArray2);

// find
let newArray3 = user.find((value)=> value.hobby === "잠자기3");
console.log(newArray3);

// findIndex
let newArray4 = user.findIndex((value)=> value.hobby === "잠자기2");
console.log(newArray4);

// slice
let newArray5 = user.slice(0,2);
console.log(newArray5);

// sort
const numSort = [1,2,5,4,23,3,4];
let numSort1 = numSort.sort();
console.log(numSort1);

const strSort = ["asd","zxc","wed","sdf"]
let strSort1 = strSort.toSorted();
let strSort2 = strSort.sort().reverse();
console.log(strSort1);
console.log(strSort2);

// concat
const con = [1,2,3,4,5];
const con2 = [6,7,8,9];

let con3 = con.concat(con2);
console.log(con3);

// join
let joined = numSort.join("==");
console.log(joined);

// split
const numSplit = joined.split("==");
console.log(numSplit);