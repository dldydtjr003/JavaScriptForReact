export default function Sub2(){
  const user = {name:"ohjh", isLogin: true};

  return (
  <>
    {user.isLogin === true ? (
      <div style={{ color: "red" }}>로그아웃</div>
    ) : (
      <div>로그인</div>
    )}
  </>
);
};