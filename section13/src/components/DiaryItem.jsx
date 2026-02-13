import { useNavigate } from 'react-router-dom';
import {getEmotionImage} from '../util/getEmotionImage'
import Button from './Button';
import './DiaryItem.css'

const DiaryItem=({emotionId, createdDate, content})=>{
  const nav = useNavigate();
  return <>
    <div className="DiaryItem">
      <div className="img_section">
        <img src={getEmotionImage(emotionId)} alt="기분 이모티콘" onClick={()=>{nav("/diary")}}/>
      </div>
      <div className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">
          {content}
        </div>
      </div>
        <div className="button_section">
          <Button text={"수정하기"} onClick={() => nav("/edit")}/>
        </div>
    </div>
  </>
}
export default DiaryItem;