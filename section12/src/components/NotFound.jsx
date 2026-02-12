import Button from './Button';
import Header from "./Header"

const NotFound=()=>{
const onClickButton=(e)=>{
    alert(e.target.innerText);
  }
  return <>
  <Header title={"HEADER"} 
      leftChild={<Button text={"LEFT"} type={"POSITIVE"} onClick={onClickButton}/>} 
      rightChild={<Button text={"RIGHT"} type={"NEGATIVE"} onClick={onClickButton}/>}/>
  </>
}
export default NotFound