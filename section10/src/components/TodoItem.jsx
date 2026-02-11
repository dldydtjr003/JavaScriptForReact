import '../css/TodoItem.css'
import { memo } from 'react';
 
const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => { 
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
export default memo(TodoItem,(prevProps, nextProps)=>{
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;
  return true;
});