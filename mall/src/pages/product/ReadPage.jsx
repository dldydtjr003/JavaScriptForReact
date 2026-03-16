import Header from "../../include/Header";
import "./ReadPage.css";
import { useParams } from "react-router-dom";
import ReadComponent from "../../components/product/ReadComponent";

const ReadPage = () => {
  const { pno } = useParams();
  return (
    <>
      <div className="main-container">
        <Header />
        <ReadComponent pno={pno} />
      </div>
    </>
  );
};
export default ReadPage;
