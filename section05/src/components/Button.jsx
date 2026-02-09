import "../CSS/Button.css";

export default function Button({text, color="red", children}) {

  const onClickButton = (e)=>{
    alert(`${text}이(가) 선택한 COLOR는 ${color}입니다.`)
    //매우중요함
    console.log(e);
  }
  return (
    <button onClick={onClickButton} style={{color: color}} type="button">
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}