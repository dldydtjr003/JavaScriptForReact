import { useRef, useState } from 'react';
import '../css/Editor.css'
const Editor=({onCreate})=>{

  const [name, setName] = useState('');
  const [kor, setKor] = useState('');
  const [eng, setEng] = useState('');
  const [math, setMath] = useState('');
  const inputRef = useRef();

  const onChangeName=(e)=>{
    setName(e.target.value);
  }
  const onChangeKor=(e)=>{
    setKor(e.target.value);
  }
  const onChangeEng=(e)=>{
    setEng(e.target.value);
  }
  const onChangeMath=(e)=>{
    setMath(e.target.value);
  }
  
  
  const onClick=()=>{
    if(name === ''){
      inputRef.current.focus();
      return;
    }
    onCreate(name,kor,eng,math);
    setName('');
    setKor('');
    setEng('');
    setMath('');
  }


  return <>
  <div className="input">
      <input name="name" type="text" value={name} onChange={onChangeName} placeholder="이름" />
      <input name="kor" type="number" value={kor} onChange={onChangeKor} placeholder="국어" />
      <input name="eng" type="number" value={eng} onChange={onChangeEng} placeholder="영어" />
      <input name="math" type="number" value={math} onChange={onChangeMath} placeholder="수학" />
      <button onClick={onClick}>등록하기</button>
    </div>
  </>
}
export default Editor;