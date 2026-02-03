// 함수 호이스팅 (함수선언식, 함수표현식, 화살표함수)
// 함수 호이스팅은 함수 선언문만 진행이 된다.
let area1 = getArea(10, 20); 
console.log(area1); 

let area2 = getArea(30, 20); 
console.log(area2); 

let area3 = getArea(120, 200); 
console.log(area3); 
// 호이스팅이란 끌어올리다 라는 뜻 
function getArea(width, height) { 
  let area = width * height; 
  return area; 
} 