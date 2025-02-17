import { IoCaretDownOutline } from 'react-icons/io5';
import MissionCard from '../components/MissionCard';
import style from './MissionPage.module.css';
import Layout from '../components/layout/Layout';
import { useEffect, useState } from 'react';
import { useMissions } from '../context/MIssionContext';
import BottomSheet from '../components/common/BottomSheet';

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
      missionId={mission.missionId}
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
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [bottomSheetType, setBottomSheetType] = useState('sort');
  const [selectedSort, setSelectedSort] = useState('최신순');
  const [selectedCategory, setSelectedCategory] = useState('카테고리');

  const toggleBottomSheet = (type) => {
    setBottomSheetType(type);
    setBottomSheetOpen(true); // BottomSheet 열기
  };

  const handleSelect = (value) => {
    if (bottomSheetType === 'sort') {
      setSelectedSort(value); // 정렬값 업데이트
    } else {
      setSelectedCategory(value); // 카테고리값 업데이트
    }
    setBottomSheetOpen(false); // BottomSheet 닫기
  };

  return (
    <Layout>
      <div className={style.missionPageBg}>
        <div className={style.noticeDiv}>📢 부산에서 열린 여러가지 미션에 참여해보세요!</div>
        <div className={style.categoryBtnBox}>
          <button className={style.categoryBtn} onClick={() => toggleBottomSheet('sort')}>
            {selectedSort}
            <IoCaretDownOutline className={style.categoryBtnImg} />
          </button>
          <button className={style.categoryBtn} onClick={() => toggleBottomSheet('category')}>
            {selectedCategory}
            <IoCaretDownOutline className={style.categoryBtnImg} />
          </button>
        </div>
        <div className={style.missionList}>
          <MissionList />
        </div>
      </div>

      <BottomSheet
        isOpen={isBottomSheetOpen}
        toggleSheet={() => setBottomSheetOpen(false)}
        type={bottomSheetType}
        onSelect={handleSelect} // 선택된 값을 업데이트하는 함수 전달
      />
    </Layout>
  );
}

export default MissionPage;
