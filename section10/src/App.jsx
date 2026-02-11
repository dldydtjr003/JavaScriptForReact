import './App.css'
import './css/App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef, useReducer } from 'react'
import Exam from './components/Exam'

// 전역변수
const mockData = [ 
  { 
    id: 0, 
    isDone: false, 
    content: "React 공부하기", 
    date: new Date().getTime(), 
  }, 
  { 
    id: 1, 
    isDone: false, 
    content: "Spring Boot 공부하기", 
    date: new Date().getTime(), 
  }, 
  { 
    id: 2, 
    isDone: false, 
    content: "Java 공부하기", 
    date: new Date().getTime(), 
  }, 
]; 
function reducer(data, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...data]
  
    case "DELETE":
      return data.filter((item)=>{
        return item.id !== action.id
        }
      )
  
    case "UPDATE":
      return data.map((item)=>{
        return item.id === action.id ?{...item, isDone: !item.isDone}:item
      })
  
    default:
      return data
  }
}

function App() {
  //const[todos, setTodos] = useState(mockData);
  const [count, setCount] = useState(10);
  const[todos,dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);

  // 이벤트 함수 생성(setTodos 핸들러 함수)
  const onCreate = (content)=>{
    dispatch({
    type:"CREATE",
    data:{
      id: idRef.current++, 
      isDone: false, 
      content: content, 
      date: new Date().getTime(), 
    }
    })
  }
  // 이벤트 함수 생성(setTodos 수정)
  const onUpdate = (id)=>{
    dispatch({
    type:"UPDATE",
    id:id
    })
  }
  // 이벤트 함수 생성(setTodos 삭제)
  const onDelete = (id)=>{
    dispatch({
      type:"DELETE",
      id:id
    })
  }
  return (
    <>
    <div className="App">
      <Header count ={count}/>
      <Exam />
      <Editor onCreate = {onCreate}/>
      <List todos = {todos} onUpdate = {onUpdate} onDelete ={onDelete}/>

    </div>

    </>
  )
}

export default App
