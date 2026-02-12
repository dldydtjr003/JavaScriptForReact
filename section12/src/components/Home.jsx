import React, { useContext, useState } from 'react';
import Header from "./Header"
import Button from './Button';
import DiaryList from './DiaryList';
import { DiaryStateContext } from '../App';

const Home=()=>{
  // 공유 props select * from diary where userId = "kdj";
 const state =  useContext(DiaryStateContext);
 const [pivotDate, setPivotDate] = useState(new Date());

 // 이전달, 다음달 이벤트 처리
 const onDecreaseMonth = (e)=>{
  setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()-1))
 }
 const onIncreaseMonth = (e)=>{
  setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()+1))
 }

 // 26년 2월달에(시작 일~끝나는 일) 해당되는 일기 필터링
 const beginTime = new Date(pivotDate.getFullYear(),pivotDate.getMonth(),1,0,0,0).getTime();
 const endTime = new Date(pivotDate.getFullYear(),pivotDate.getMonth()+1,0,23,59,59).getTime();
 const monthlyData = state.filter((item)=>
  item.createdDate >= beginTime && item.createdDate <= endTime
 )

 const onClickButton=(e)=>{
    alert(e.target.innerText);
  }
  return <>
   <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} 
      leftChild={<Button text={"< 이전달"} onClick={onDecreaseMonth}/>} 
      rightChild={<Button text={"다음달 >"} onClick={onIncreaseMonth}/>}/>
  <DiaryList monthlyData = {monthlyData}/>

  </>
}
export default Home