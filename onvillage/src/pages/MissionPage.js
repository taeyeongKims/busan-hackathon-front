import { IoCaretDownOutline } from 'react-icons/io5';
import MissionCard from '../components/MissionCard';
import style from './MissionPage.module.css';
import Layout from '../components/layout/Layout';
import { useEffect, useState } from 'react';
import { useMissions } from '../context/MIssionContext';

const dummyData = [
  {
    missionId: 1,
    userId: 'sdfjskjk',
    nickname: '닉네임입니당',
    title: '해운대에서 예쁜 바다사진 찍기기',
    image:
      'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fbeautiful-beach-tropical-sea_87394-23002.jpg&type=sc960_832',
    scrapNumber: 100,
    applyNumber: 12,
    applySuccessNumber: 10,
    date: '2025.02.17',
  },
  {
    missionId: 2,
    userId: 'aaaaaaaaaaaa',
    nickname: '안녕녕',
    title: '부산 바캉스',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTNfMjE2%2FMDAxNzM0MDQ5NDAxNzg0.Yk2qqTdXGk_UIdyc3ewKfXMXYJYxbqZgV5xfPIMillYg.X5lYnQ9t77bXgt1Ac3KK3pVF-6GxpC9cKars4bnwzaYg.JPEG%2FIMG_4214.JPG&type=sc960_832',
    scrapNumber: 2,
    applyNumber: 1,
    applySuccessNumber: 1,
    date: '2025.02.18',
  },
];

function MissionList() {
  const [missions, setMissions] = useState([]);
  const { getMissionList } = useMissions();

  useEffect(() => {
    const fetchMissions = async () => {
      const datas = await getMissionList();
      setMissions(datas.missionList || []);
    };

    fetchMissions();
  }, []);

  if (!missions) return <p>로딩 중...</p>;

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

const categories = [
  '감성샷',
  '전통문화',
  '바다뷰',
  '핫플',
  '먹거리',
  '가족코스',
  '예술전시',
  '힐링산책',
  '액티비티',
  '야경명소',
];

function CategoryBtn({ name }) {
  return (
    <div className={style.categoryBtn}>
      {name}
      <IoCaretDownOutline className={style.categoryBtnImg} />
    </div>
  );
}

function MissionPage() {
  return (
    <Layout>
      <div className={style.missionPageBg}>
        <div className={style.noticeDiv}>📢 부산에서 열린 여러가지 미션에 참여해보세요!</div>
        <div className={style.categoryBtnBox}>
          <CategoryBtn name="전체" />
          <CategoryBtn name="최신순" />
        </div>
        <MissionList />
      </div>
    </Layout>
  );
}

export default MissionPage;
