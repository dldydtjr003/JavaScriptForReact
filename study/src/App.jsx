import './css/App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef } from 'react'

const mockData =[
  {
    name: '이용석',
    kor: 60,
    eng: 60,
    math: 60,
    total: 180,
    avg: 60,
    date: new Date().getTime()
  }
]
function App() {
  const[todos,setTodos] = useState(mockData);

  const onCreate = (name, kor, eng, math) => {
    const total = Number(kor) + Number(eng) + Number(math);
    const avg = (total / 3).toFixed(1);

    const newTodo = {
      name: name,
      kor: parseInt(kor),
      eng: parseInt(eng),
      math: parseInt(math),
      total: total,
      avg: avg,
      date: new Date().getTime()
    };
    setTodos([newTodo, ...todos]);
  };
  const onDelete=(targetName)=>{
    setTodos(todos.filter((todo)=>{
      return todo.name !== targetName;
    }))
  }
const onUpdate = (name) => {
  const newKor = prompt('');

  setTodos(todos.map((todo) => {
    return todo.name === name ? { ...todo, kor: Number(newKor) } : todo
}));
};


  return (
    <>
      <div className='App'>
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos = {todos} onDelete={onDelete} onUpdate={onUpdate}/>
      </div>
    </>
  )
}

export default App
