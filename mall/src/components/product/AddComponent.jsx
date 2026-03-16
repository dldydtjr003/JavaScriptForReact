import { useRef, useState } from "react";
import { postAdd } from "../../api/productsApi";
import FetchingModal from "../common/FetchingModal";
import InfoModal from "../common/InfoModal";
import useCustomMove from "../../hooks/useCustomMove";
import "./AddComponent.css"; // CSS 파일 임포트

const initState = {
  pname: "",
  pdesc: "",
  price: 0,
  files: [],
};

export default function AddComponent() {
  const [product, setProduct] = useState({ ...initState });
  const [fetching, setFetching] = useState(false);
  const [infoModalOn, setInfoModalOn] = useState(false);
  const [result, setResult] = useState();
  const { moveToProductList } = useCustomMove();
  // 파일 위치
  const uploadRef = useRef();
  // 입력값을 product 객체 수정진행
  const handleChangeProduct = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickAdd = () => {
    // 전송 시 파일 데이터를 포함하기 위해 uploadRef 사용 가능
    const files = uploadRef.current.files;
    // 여기에 API 호출 로직(예: postAdd)을 추가할 수 있습니다.
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    //other data
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);
    console.log(formData);

    // API 호출진행하고 서버에 전송
    setFetching(true);
    postAdd(formData).then((data) => {
      setFetching(false);
      setInfoModalOn(true);
      setResult(data.result);
    });
  };

  const closeModal = () => {
    setInfoModalOn(false);
    moveToProductList({ page: 1 });
  };

  return (
    <div className="add-container">
      {fetching ? <FetchingModal /> : <></>}
      <InfoModal
        show={infoModalOn}
        title={`Product ADD RESULT`}
        content={`New ${result} Added`}
        callbackFn={closeModal}
      />
      <div className="form-wrapper">
        {/* 상품명 입력 */}
        <div className="form-group">
          <label className="form-label">Product Name</label>
          <input
            className="form-control"
            name="pname"
            type="text"
            value={product.pname}
            onChange={handleChangeProduct}
            placeholder="Enter pname"
          />
        </div>

        {/* 상품 설명 입력 (Textarea) */}
        <div className="form-group">
          <label className="form-label">Product Description</label>
          <textarea
            className="form-control"
            name="pdesc"
            value={product.pdesc}
            rows={4}
            onChange={handleChangeProduct}
          />
        </div>

        {/* 가격 입력 */}
        <div className="form-group">
          <label className="form-label">Price</label>
          <input
            className="form-control"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChangeProduct}
            placeholder="Enter price"
          />
        </div>

        {/* 파일 업로드 (Multiple) */}
        <div className="form-group">
          <label className="form-label">Files</label>
          <input
            className="form-control"
            ref={uploadRef}
            type="file"
            multiple={true}
          />
        </div>
      </div>

      {/* 저장 버튼 */}
      <div className="button-group">
        <button className="btn-save" type="button" onClick={handleClickAdd}>
          저장
        </button>
      </div>
    </div>
  );
}
