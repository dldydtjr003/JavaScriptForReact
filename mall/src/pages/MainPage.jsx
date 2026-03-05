import Header from "../include/header";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline">
              Main Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
export default MainPage;
