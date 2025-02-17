import { BiSolidLike } from 'react-icons/bi';
import { BiSolidCommentDetail } from 'react-icons/bi';
import style from './MissionCard.module.css';
import { useNavigate } from 'react-router-dom';

function MissionCard({ missionId, nickname, title, image, scrapNumber, applySuccessNumber, date }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/mission-detail`);
  };

  return (
    <div key={missionId} className={style.cardContainer} onClick={handleClick}>
      <div className={style.cardTextDiv}>
        <div className={style.missionTitle}>{title}</div>
        <div className={style.missionInfo}>
          <div className={style.missionState}>
            <div className={style.stateImgBox}>
              <BiSolidLike className={style.stateImg} />
              {scrapNumber}
            </div>
            <div className={style.stateImgBox}>
              <BiSolidCommentDetail className={style.stateImg} />
              {applySuccessNumber}
            </div>
          </div>
          <div>
            <span>
              {date} | {nickname}
            </span>
          </div>
        </div>
      </div>
      <img src={image} />
    </div>
  );
}

export default MissionCard;
