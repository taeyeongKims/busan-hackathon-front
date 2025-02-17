import LogoImg from '../assets/Logo.png';
import style from './MissionPage.module.css';

function MissionPage() {
  return (
    <>
      <div className={style.missionHeader}>
        <img src={LogoImg} className={style.LogoImg} />
      </div>
    </>
  );
}

export default MissionPage;
