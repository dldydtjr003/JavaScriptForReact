import Header from "../../include/header";
import "./ReadPage.css";
import { useCallback } from "react";
import {
  useParams,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";
import useCustomMove from "../../hooks/useCustomMove";

const ReadPage = () => {
  const { tno } = useParams();
  const navigate = useNavigate();
  const { moveToList, moveToModify } = useCustomMove();
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
        <ReadComponent
          tno={tno}
          moveToList={moveToList}
          moveToModify={moveToModify}
        />
      </div>
    </>
  );
};
export default ReadPage;
