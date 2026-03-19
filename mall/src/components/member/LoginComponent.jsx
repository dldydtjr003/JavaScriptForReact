import React, { useState } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";
import "./LoginComponent.css"; // CSS 분리

const initState = {
  email: "",
  pw: "",
};

export default function LoginComponent() {
  const [loginParam, setLoginParam] = useState({ ...initState });
  const { doLogin, moveToPath } = useCustomLogin();

  // 상태 업데이트 시 객체 불변성 유지
  const handleChange = (e) => {
    setLoginParam({
      ...loginParam,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickLogin = () => {
    console.log("Login Attempt:", loginParam);
    //dispatch(login(loginParam));
    doLogin(loginParam).then((data) => {
      console.log("loginComponent = " + data.email);
      if (data.error) {
        alert("이메일과 패스워드를 다시 확인하세요.");
      } else {
        alert("로그인이 성공했습니다.");
        moveToPath("/");
      }
    });
  };

  return (
    <div className="login-form-container">
      <h2 className="login-title">Login</h2>

      <div className="login-fields">
        {/* 이메일 입력 영역 */}
        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input
            className="input-field"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={loginParam.email}
            onChange={handleChange}
          />
        </div>

        {/* 비밀번호 입력 영역 */}
        <div className="input-group">
          <label className="input-label">Password</label>
          <input
            className="input-field"
            name="pw"
            type="password"
            placeholder="Enter your password"
            value={loginParam.pw}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* 로그인 버튼 영역 */}
      <div className="login-button-wrapper">
        <button
          className="btn-login-submit"
          type="button"
          onClick={handleClickLogin}
        >
          로그인
        </button>
      </div>
    </div>
  );
}
