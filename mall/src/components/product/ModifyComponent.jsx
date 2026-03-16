import { useEffect, useState } from "react";
import { getOne, putOne, deleteOne } from "../../api/todoApi"; // 필요한 API 함수 가정
import "./ModifyComponent.css";
import useCustomMove from "../../hooks/useCustomMove";
import InfoModal from "../common/InfoModal";

const ModifyComponent = ({ tno }) => {
  return (
    <div className="modify-container">
      <h1>Product Modify Component</h1>
    </div>
  );
};

export default ModifyComponent;
