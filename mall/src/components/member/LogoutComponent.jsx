import useCostomLogin from "../../hooks/useCustomLogin";
import "./LogoutComponent.css"; // CSS 파일 분리

export default function LogoutComponent() {
  const { doLogout, moveToPath } = useCostomLogin();

  const handleClickLogout = () => {
    doLogout();
    alert("로그아웃 성공");
    moveToPath("/");
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <div className="logout-header">Logout</div>

        <div className="logout-body">
          <h3 className="logout-title">로그아웃을 진행하시겠습니까?</h3>

          <div className="logout-button-wrapper">
            <button
              className="btn-logout-submit"
              type="button"
              onClick={handleClickLogout}
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
