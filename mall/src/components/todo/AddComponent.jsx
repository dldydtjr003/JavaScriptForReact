import { useState } from "react";
import "./AddComponent.css"; // CSS 파일 임포트
import useCustomMove from "../../hooks/useCustomMove";
import { postAdd } from "../../api/todoApi";
import InfoModal from "../common/InfoModal";

const initState = {
  title: "",
  writer: "",
  complete: false,
  dueDate: "",
};

export default function AddComponent() {
  const [todo, setTodo] = useState({ ...initState });
  const { moveToList } = useCustomMove();
  // 모달창 isShow
  const [infoModalOn, setInfoModalOn] = useState(false);
  // API 서버 저장된 번호
  const [result, setResult] = useState(null);

  // 입력값 변경 핸들러 (객체 불변성을 지키며 업데이트)
  const handleChangeTodo = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickAdd = () => {
    postAdd(todo)
      .then((data) => {
        console.log(data);
        // 입력이 성공된 번호 저장
        setResult(data.TNO);
        // 모달창 보여주는것 결정
        setInfoModalOn(true);
        // 입력 필드 초기화
        setTodo(...initState);
      })
      .catch((e) => console.error(e));
  };

  const closeModal = () => {
    // 모달창 isShow 감춤
    setInfoModalOn(false);
    moveToList(); // 목록으로 이동
  };
  return (
    <div className="add-container">
      {/* 등록 완료 알림 모달 */}
      <InfoModal
        show={infoModalOn}
        title={`Todo 저장 결과`}
        content={`New ${result} 저장 완료`}
        callbackFn={closeModal}
      />

      <div className="form-wrapper">
        <div className="form-group">
          <label className="form-label">TITLE</label>
          <input
            className="form-control"
            name="title"
            type="text"
            value={todo.title}
            onChange={handleChangeTodo}
            placeholder="Enter Title"
          />
        </div>

        <div className="form-group">
          <label className="form-label">WRITER</label>
          <input
            className="form-control"
            name="writer"
            type="text"
            value={todo.writer}
            onChange={handleChangeTodo}
            placeholder="Enter Writer"
          />
        </div>

        <div className="form-group">
          <label className="form-label">DUEDATE</label>
          <input
            className="form-control"
            name="dueDate"
            type="date"
            value={todo.dueDate}
            onChange={handleChangeTodo}
          />
        </div>
      </div>

      <div className="button-group">
        <button className="btn btn-save" type="button" onClick={handleClickAdd}>
          저장
        </button>
        <button
          className="btn btn-list"
          type="button"
          onClick={() => moveToList({ page: 1, size: 10 })}
        >
          목록
        </button>
      </div>
    </div>
  );
}
