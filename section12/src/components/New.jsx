import Header from './Header';
import Button from './Button';
import Editor from './Editor';
import { useNavigate } from 'react-router-dom';
import {DiaryDispatchContext} from "../App"
import { useContext } from 'react';

const New=()=>{
  const nav = useNavigate();
  const {onCreated} = useContext(DiaryDispatchContext);

  

  // 전송버튼 기능(onCreated)
 const onSubmit = (input) => {
  onCreated(input.createdDate.getTime(), input.emotionId, input.content);
  nav("/", { replace: true });
}

  return <>
    <div>
      <Header
        title={"일기 쓰기"} leftChild={<Button text={"뒤로가기"} onClick={(e)=>nav(-1)} />}
      />
    </div>
    <Editor onSubmit={onSubmit}/>
  </>
}
export default New