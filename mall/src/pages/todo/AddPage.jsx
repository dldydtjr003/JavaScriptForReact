import Header from "../../include/header";
import "./AddPage.css";

const AddPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline">
              Todo Add Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
export default AddPage;
