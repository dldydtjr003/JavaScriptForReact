import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import "./ReadComponent.css";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};
const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState); // 아직 todo는 사용하지 않음
  // 마운트 기능
  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);

  return (
    <div>
      <div className="read-container">
        <MakeDiv title="Tno" value={todo.tno} />
        <MakeDiv title="Writer" value={todo.writer} />
        <MakeDiv title="Title" value={todo.title} />
        <MakeDiv title="Due Date" value={todo.dueDate} />
        <MakeDiv
          title="Complete"
          value={todo.complete ? "Completed" : "Not Yet"}
        />
      </div>
    </div>
  );
};

// 가독성을 위해 내부 컴포넌트로 분리 (첫 글자 대문자)
const MakeDiv = ({ title, value }) => (
  <div className="read-row">
    <div className="read-wrapper">
      <div className="read-label">{title}</div>
      <div className="read-value">{value}</div>
    </div>
  </div>
);

export default ReadComponent;
