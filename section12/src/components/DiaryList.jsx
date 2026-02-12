import { useState } from "react";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import './DiaryList.css'
import { useNavigate } from "react-router-dom";

const DiaryList=({monthlyData})=>{
  // 정렬 순서 상태변화
  const[sortType,setSortType] = useState("latest");
  
  // 페이지 라우팅
  const nav = useNavigate();

  // 정렬처리 (내림차순, 오름차순)
  const getSortedMonthlyData = ()=>{
    return monthlyData.toSorted((a,b)=>{
      if(sortType === "oldest"){
        return a.createdDate - b.createdDate
      }else{
        return b.createdDate - a.createdDate
      }
    })
  }

  const sortedMonthlyData = getSortedMonthlyData();

  return <>
    <div className="DiaryList">
      <div className="menu_bar">
        <select value={sortType} onChange={(e)=>setSortType(e.target.value)}>
          <option value={"latest"}>LATEST</option>
          <option value={"oldest"}>OLDEST</option>
        </select>
        <Button text={"새 일기 작성"} type={"POSITIVE"} onClick={()=>{nav("/new")}}/>
      </div>
        <div className="List_wrapper">
          {sortedMonthlyData.map((item)=>{
            return <DiaryItem key={item.id} {...item}/>
          })}
        </div>
    </div>
  </>
}
export default DiaryList;