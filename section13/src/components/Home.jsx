import { useContext, useState } from "react"
import Button from "./Button"
import DiaryList from "./DiaryList"
import Header from "./Header"
import {DiaryStateContext} from '../App'

const getMonthlyData=(pivote,data)=>{
  const beginTime = new Date(pivote.getFullYear(),pivote.getMonth(),1,0,0,0).getTime();
  const endTime = new Date(pivote.getFullYear(),pivote.getMonth()+1,0,23,59,59).getTime();
  return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime)}

const Home=()=>{
  // 공유 props select * from diary where userId = "kdj";
  const data = useContext(DiaryStateContext)
  const [pivote,setPivote] = useState(new Date());
 // 이전달, 다음달 이벤트 처리
  const monthlyData = getMonthlyData(pivote,data);
 // 26년 2월달에(시작 일~끝나는 일) 해당되는 일기 필터링
  const onIncreaseMonth=()=>{
    setPivote(new Date(pivote.getFullYear(),pivote.getMonth()+1))
  }
  const onDecreaseMonth=()=>{
    setPivote(new Date(pivote.getFullYear(),pivote.getMonth()-1))
  }

  return <>
   <div className="header_button">
    <Header
      title = {`${pivote.getFullYear()}년 ${pivote.getMonth()+1}달`}
      leftChild = {<Button text = {"< 저번달"} onClick={onDecreaseMonth}/>}
      rightChild = {<Button text = {"다음달 >"} onClick={onIncreaseMonth}/>}
    />
    <DiaryList monthlyData = {monthlyData}/>
   </div>
  </>
}
export default Home