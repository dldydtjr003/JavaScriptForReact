import { useCallback } from "react";
import Header from "../../include/header";
import "./ReadPage.css";
import { useParams, useNavigate } from "react-router-dom";

const ReadPage = () => {
  const { tno } = useParams();
  const navigate = useNavigate();

  // 동적페이지 이동
  const moveModify = useCallback(() => {
    navigate({
      pathname: `/todo/modify/${tno}`,
    });
  }, [navigate, tno]);
  return (
    <>
      <div className="main-container">
        <Header />
        <p>Read Page tno = {tno}</p>
        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline">
              Todo Read Page
            </button>
          </div>
          <div className="button-wrapper">
            <button
              type="button"
              className="custom-btn-outline"
              onClick={() => moveModify()}
            >
              Todo Modify Page 이동
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
export default ReadPage;
