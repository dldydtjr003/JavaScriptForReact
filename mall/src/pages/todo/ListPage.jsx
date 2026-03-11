import Header from "../../include/Header";
import "./ListPage.css";
import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  return (
    <>
      <div className="main-container">
        <Header />
        <main className="list-content-area">
          <div className="list-wrapper">
            {/* 실제 데이터 목록이 표시되는 컴포넌트 */}
            <ListComponent />
          </div>
        </main>
      </div>
    </>
  );
};
export default ListPage;
