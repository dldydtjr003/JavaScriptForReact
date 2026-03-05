import Header from "../../include/header";
import "./ReadPage.css";
import { useCallback } from "react";
import {
  useParams,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";

const ReadPage = () => {
  const { tno } = useParams();
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();

  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  // "?page=1&size=10"
  const queryStr = createSearchParams({ page, size }).toString();

  // 동적페이지 이동
  const moveModify = useCallback(() => {
    navigate({
      pathname: `/todo/modify/${tno}`,
      search: queryStr,
    });
  }, [navigate, tno, queryStr]);
  return (
    <>
      <div className="main-container">
        <Header />
        <p>Read Page tno = {tno}</p>

        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline">
              Todo Read Page
            </button>
          </div>
          <div className="button-wrapper">
            <button
              type="button"
              className="custom-btn-outline"
              onClick={() => moveModify()}
            >
              Todo Modify Page 이동
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
export default ReadPage;
