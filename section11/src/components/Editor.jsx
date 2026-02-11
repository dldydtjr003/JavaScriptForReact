import { useRef, useState, useContext } from 'react';
import '../css/Editor.css'
import { TodoDispatchContext } from '../App';

const Editor = ()=>{
  const {onCreate} = useContext(TodoDispatchContext)
  const [content,setContent] = useState('');
  const inputRef = useRef();
  const onChangeContent = (e)=>{
    setContent(e.target.value);
  }
  const onSubmit = ()=>{
    if(content === ''){
      inputRef.current.focus();
      return
    }
    onCreate(content);
    setContent('');
  }
  const onKeyDown = (e)=>{
    if(e.keyCode === 13){
      onSubmit();
    }
  }

  return <>
    <div className="Editor"> 
      <input value={content} onKeyDown={onKeyDown} onChange={onChangeContent} ref = {inputRef} placeholder="새로운 Todo..." /> 
      <button onClick={onSubmit}>추가</button> 
    </div> 
  </>
}
export default Editor;