import { useEffect, useState } from "react";
import { getOne, putOne, deleteOne } from "../../api/todoApi"; // 필요한 API 함수 가정
import "./ModifyComponent.css";
import useCustomMove from "../../hooks/useCustomMove";
import InfoModal from "../common/InfoModal";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: "",
  complete: false,
};

const ModifyComponent = ({ tno }) => {
  const [todo, setTodo] = useState({ ...initState });
  const { moveToList, moveToRead } = useCustomMove();
  // 모달창에 저장 될 API 서버에서 가져온 번호
  const [result, setResult] = useState(null);
  // 모달창 isShow
  const [infoModalOn, setInfoModalOn] = useState(false);

  // modifyComponent 로딩이 될 때 해당 번호에 대한 api서버로부터 가져온다.
  useEffect(() => {
    getOne(tno).then((data) => setTodo(data));
  }, [tno]);

  // 데이터가 변경이 될 때 todo 수정
  const handleChangeTodo = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  // select문에서
  const handleChangeTodoComplete = (e) => {
    const value = e.target.value;
    setTodo({
      ...todo,
      complete: value === "Y", // 불리언 값으로 직접 저장
    });
  };

  const handleClickModify = () => {
    // 실제 수정 로직 호출 (예시)
    putOne(todo).then((data) => {
      setResult(data.RESULT);
      setInfoModalOn(true);
    });
  };
  const handleClickDelete = () => {
    // 실제 삭제 로직 호출 (예시)
    deleteOne(tno).then((data) => {
      setResult(data.RESULT);
      setInfoModalOn(true);
    });
  };

  const closeModal = () => {
    // 모달창 isShow 감춤
    setInfoModalOn(false);
    moveToList(); // 목록으로 이동
  };
  return (
    <div className="modify-container">
      {/* 등록 완료 알림 모달 */}
      <InfoModal
        show={infoModalOn}
        title={`결과`}
        content={`New ${result} 완료`}
        callbackFn={closeModal}
      />
      <div className="form-group">
        <label className="form-label">TNO</label>
        <input className="form-control" value={tno} type="text" disabled />
      </div>

      <div className="form-group">
        <label className="form-label">WRITER</label>
        <input
          className="form-control"
          value={todo.writer}
          type="text"
          disabled
        />
      </div>

      <div className="form-group">
        <label className="form-label">TITLE</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={todo.title}
          onChange={handleChangeTodo}
        />
      </div>

      <div className="form-group">
        <label className="form-label">DATE</label>
        <input
          className="form-control"
          name="dueDate"
          value={todo.dueDate}
          type="date"
          onChange={handleChangeTodo}
        />
      </div>

      <div className="form-group">
        <label className="form-label">COMPLETE</label>
        <select
          className="form-select"
          name="status"
          value={todo.complete ? "Y" : "N"}
          onChange={handleChangeTodoComplete}
        >
          <option value="Y">Completed</option>
          <option value="N">Not Yet</option>
        </select>
      </div>
      <div className="button-group">
        <button
          className="btn btn-modify"
          type="button"
          onClick={handleClickModify}
        >
          수정하기
        </button>
        <button
          className="btn btn-delete"
          type="button"
          onClick={handleClickDelete}
        >
          삭제하기
        </button>
        <button
          className="btn btn-list"
          type="button"
          onClick={() => moveToList()}
        >
          목록가기
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
