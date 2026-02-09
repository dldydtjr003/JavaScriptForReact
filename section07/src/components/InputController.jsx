import { useState } from "react";

const InputController = ({onClickCalculate})=>{

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const onChangeNum1 = (e) => {
      setNum1(e.target.value)
    }
    const onChangeNum2 = (e) => {
      setNum2(e.target.value)
    }
    const onClickButton=(e)=>{
      const op = e.target.value;
      onClickCalculate(num1,num2,op)
    }
  return <>
  <div className="InputController">
          <label htmlFor="num1">숫자1</label>
          <input type="number" name="num1" id="num1" value={num1} onChange={onChangeNum1}/><br />
          <label htmlFor="num2">숫자2</label>
          <input type="number" name="num2" id="num2" value={num2}onChange={onChangeNum2}/><br />

          <button type="button" onClick={onClickButton} value={'+'}>+</button>
          <button type="button" onClick={onClickButton} value={'-'}>-</button>
          <button type="button" onClick={onClickButton} value={'*'}>*</button>
          <button type="button" onClick={onClickButton} value={'/'}>/</button>
          </div>
  </>
}
export default InputController;