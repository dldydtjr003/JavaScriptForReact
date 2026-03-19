import Header from "../include/header";
import useCustomLogin from "../hooks/useCustomLogin";
import "./AboutPage.css";

const AboutPage = () => {
  const { isLogin, moveToLoginReturn } = useCustomLogin();

  // 로그인이 안되었으면 로그인페이지로 이동
  if (!isLogin) {
    alert("About 페이지는 회원만 보실수 있습니다.");
    return moveToLoginReturn();
  }
  return (
    <>
      <div className="main-container">
        <Header />
        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline">
              About Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
export default AboutPage;
