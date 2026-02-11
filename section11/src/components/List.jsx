import { useState,useMemo, useContext } from 'react';
import '../css/List.css'
import TodoItem from './TodoItem';
import { TodoStateContext,TodoDispatchContext } from '../App';

const List = ()=>{
  const {todos} = useContext(TodoStateContext)
  const [search,setSearch] = useState('');

  const onChangeSearch=(e)=>{
    setSearch(e.target.value);
  }
  // 전체 리스트 갯수, 완료 갯수, 미완료 갯수
  const { totalCount, doneCount, notDoneCount } = useMemo(()=>{
    let totalCount = todos.length;
    let doneCount = todos.filter((todo)=>todo.isDone === true).length
    let notDoneCount = totalCount - doneCount;
    return {totalCount,doneCount,notDoneCount};
  },[todos])

  // 주의!! 
  const getFilterData = ()=>{
    if(search === ''){
      return todos;
    }
    return todos.filter((todo)=>{
      return todo.content.toLowerCase().includes(search.toLowerCase())
    })
  }
  const filterTodos = getFilterData();
  
  
  
  return <>
    <div className="List"> 
      <div>
        <p>total:{totalCount}</p>
        <p>done:{doneCount}</p>
        <p>notDone:{notDoneCount}</p>
      </div>
      <h4>Todo List </h4> 
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" /> 
      <div className="todos_wrapper"> 
        {filterTodos.map((todo)=>{
          return <TodoItem key={todo.id} {...todo}/>
        })} 
      </div> 
    </div> 
  </>
}
export default List;