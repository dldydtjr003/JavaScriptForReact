import "../CSS/Sub.css"

export default function Sub(){
  const user = {name:"ohjh", isLogin: true};

  if(user.isLogin === true) {
    return <> <div className="status-card login">{user.name}님 로그아웃!</div> </>
  }else {
    return <> <div className="status-card logout">로그인을 먼저 해주세요.</div> </>
  };
}