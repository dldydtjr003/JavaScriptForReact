import Header from "../../include/header";
import "./ListPage.css";
import { useSearchParams } from "react-router-dom";

const ListPage = () => {
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  return (
    <>
      <div className="main-container">
        <Header />

        <p>
          Todo List Page{page} size={size}
        </p>
        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline">
              Todo List Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
export default ListPage;
