import { IoCaretDownOutline } from 'react-icons/io5';
import MissionCard from '../components/MissionCard';
import style from './MissionPage.module.css';
import Layout from '../components/layout/Layout';
import { useEffect, useState } from 'react';
import { useMissions } from '../context/MIssionContext';

function UserMissionPage() {
  const [missions, setMissions] = useState([]);
  const { getMissionList } = useMissions();

  useEffect(() => {
    const fetchMissions = async () => {
      const datas = await getMissionList();
      setMissions(datas.missionList || []);
    };

    fetchMissions();
  }, []);

  return missions.map((mission) => (
    <MissionCard
      key={mission.missionId}
      nickname={mission.nickname}
      title={mission.title}
      image={mission.image}
      scrapNumber={mission.scrapNumber}
      applySuccessNumber={mission.applySuccessNumber}
      date={mission.date}
    />
  ));
}

function MissionPage() {
  return (
    <Layout>
      <div className={style.missionPageBg}>
        <div className={style.noticeDiv}>📢 부산에서 열린 여러가지 미션에 참여해보세요!</div>
        <MissionList />
      </div>
    </Layout>
  );
}

export default UserMissionPage;
