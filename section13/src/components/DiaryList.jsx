import { useNavigate } from "react-router-dom";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import './DiaryList.css'
import { useState } from "react";

const DiaryList=({monthlyData})=>{
  // 정렬 순서 상태변화
  const sortedMonthlyData = monthlyData;
  const nav = useNavigate();
  const [sortType,setSortType] = useState("latest");
  // 페이지 라우팅

  // 정렬처리 (내림차순, 오름차순)
  const getChangeSortType = (e)=>{
    setSortType(e.target.value);
  }
 const getSortedData = () => {
    if (!monthlyData) return [];

    return [...monthlyData].sort((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };
  const sortedData = getSortedData();

  return <>
   <div className="DiaryList"> 
      <div className="menu_bar"> 
        <select value={sortType} onChange={getChangeSortType}> 
          <option value={"latest"} >최신순</option> 
          <option value={"oldest"} >오래된 순</option> 
        </select> 
        <Button text={"새 일기 쓰기"} type={"POSITIVE"} onClick={() => nav("/new")}/> 
      </div> 
      <div className="list_wrapper"> 
        {sortedData.map((item)=>{
          return <DiaryItem key={item.id} {...item}/> 
        })}
      </div> 
    </div>
  </>
}
export default DiaryList;