import '../css/TodoItem.css'
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, content, date}) => { 
  const {onUpdate,onDelete} = useContext(TodoDispatchContext)
  const onChangeIsDone = (e)=>{
    onUpdate(id);
  }
  const onClickDelete=(e)=>{
    onDelete(id);
  }
  return <>
  <div className="TodoItem"> 
    <input onChange={onChangeIsDone} type="checkbox" checked={isDone} /> 
    <div className="content">{content}</div> 
    <div className="date">{new Date(date).toLocaleDateString()}</div> 
    <button onClick={onClickDelete}>삭제</button> 
  </div> 
  </>
}; 
export default memo(TodoItem);