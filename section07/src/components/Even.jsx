import { useEffect } from "react";

const Even = () => {

  //마운트 될 때, 언마운트 될 때 작동한다.
  useEffect(()=>{
    console.log(`Even이 마운트 될 때`);
    return ()=>{
      console.log(`Even이 언마운트 될 때`);
    }
  },[]);
  return <>
    <div><h1>짝수입니다.</h1></div>
  </>
}
export default Even;