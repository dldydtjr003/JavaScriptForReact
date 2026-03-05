import Header from "../../include/header";
import { useParams } from "react-router-dom";
import "./ReadPage.css";

const ModifyPage = () => {
  const { tno } = useParams();
  return (
    <>
      <div className="main-container">
        <Header />
        <p>Modify Page tno = {tno}</p>
        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline">
              Todo Modify Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
export default ModifyPage;
