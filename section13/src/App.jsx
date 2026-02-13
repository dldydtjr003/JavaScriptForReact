import { data, Route, Routes } from "react-router-dom"
import { createContext } from "react"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Diary from "./components/Diary"
import Edit from "./components/Edit"
import New from "./components/New"
import { useState, useRef, useReducer } from "react"

// 가상데이터
const mockData = [ 
  { 
    id: 1, 
    createdDate: new Date().getTime(), 
    emotionId: 1, 
    content: "1번 일기 내용", 
  }, 
  { 
    id: 2, 
    createdDate: new Date().getTime(), 
    emotionId: 2,    
    content: "2번 일기 내용", 
  }, 
  { 
    id: 3, 
    createdDate: new Date(2026,2,1), 
    emotionId: 3,    
    content: "3번 일기 내용", 
  }, 
  { 
    id: 4, 
    createdDate: new Date(2026,1,1), 
    emotionId: 4,    
    content: "4번 일기 내용", 
  }, 
]; 

// useReducer
function reducer(state,action){
  switch (action.type) {
    case "CREATE":
      return[action.data, ...state]
    case "UPDATE":
      return state.map((item)=>{
        return item.id === action.id ? action.data : item
      })
    case "DELETE":
      return state.filter((item)=>{
        return item.id !== action.id
      })
      
    default:
      return state
  }
}

  // props 내용을 공동으로 공유할 장소설정
  export const DiaryStateContext = createContext();
  export const DiaryDispatchContext = createContext();
function App() {
  // 이벤트 처리 onCreate, onUpdate, onDelete
  const [state, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(5);
  
  const onCreate=(createdDate,emotionId,content)=>{
    dispatch({
      type : "CREATE",
      data:{
        id:idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }
  const onUpdate=(id,createdDate,emotionId,content)=>{
    dispatch({
      type : "UPDATE",
      data:{
        id,
        createdDate,
        emotionId,
        content
      }
    })
  }
  const onDelete=(id)=>{
    dispatch({
      type : "DELETE",
      data:{
        id
      }
    })
  }
  return (
    <>
    <DiaryStateContext.Provider value={state}>
    <DiaryDispatchContext.Provider value={{onCreate,onUpdate,onDelete}}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/edit" element={<Edit/>}/>
      <Route path="/diary" element={<Diary/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
  )
}

export default App
