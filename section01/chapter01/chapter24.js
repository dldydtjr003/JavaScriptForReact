// 1. 날짜를 생성하는 방법
let date1 = new Date();
let timeValue = date1.getTime();
console.log(timeValue);
console.log(date1);

// 2. 날짜를 설정하는 방법
let date2 = new Date(2020,2,1,23,23,23);
let timeValue2 = date2.getTime();
console.log(timeValue2);
console.log(date2);

// 3. 상대방에게 getTime() 주게되면, 날짜로 복구가능한가?
let date3 = new Date(timeValue2);
console.log(`date3 = ${date3}`);

// 4. 날짜 : 추출(년도, 월, 일, 시간, 분, 초, 밀리초)
// 5. 날짜 : 수정(년도, 월, 일, 시간, 분, 초, 밀리초)
let date4 = new Date();
date4.setFullYear(2025);
date4.setMonth(2-1);
date4.setDate(4);
date4.setHours(17);
date4.setMinutes(26);
date4.setSeconds(23);
date4.setMilliseconds(123);

let year = date4.getFullYear();
let month = date4.getMonth()+1;
let date = date4.getDate();
let hour = date4.getHours();
let minute = date4.getMinutes();
let second = date4.getSeconds();
let millisecond = date4.getMilliseconds();
console.log(year);
console.log(month);
console.log(date);
console.log(hour);
console.log(minute);
console.log(second);
console.log(millisecond);

// 6. 시간은 제외 날짜만 출력
let date5 = new Date();
console.log(date5.toDateString());

// 7. 현재 지역의 시간표시
console.log(date5.toLocaleDateString());