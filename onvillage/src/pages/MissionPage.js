import MissionCard from '../components/MissionCard';
import style from './MissionPage.module.css';

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
  return dummyData.map((mission) => (
    <MissionCard
      key={mission.id}
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
    <div className={style.missionPageBg}>
      <div className={style.noticeDiv}>📢 부산에서 열린 여러가지 미션에 참여해보세요!</div>
      <MissionList />
    </div>
  );
}

export default MissionPage;
