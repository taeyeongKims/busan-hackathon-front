import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward, IoIosArrowBack, IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import CertifiedBox from '../components/common/CertifiedBox';
import CategoryBox from '../components/common/CategoryBox';
import Layout from '../components/layout/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useMissions } from '../context/MIssionContext';
import MapImg from '../assets/Map.jpg';

const MisstionDetailPage = () => {
  // const { key } = useParams();
  const [activeTab, setActiveTab] = useState('mission');
  const { getMissionInfo } = useMissions();
  const navigate = useNavigate();
  // const { missionInfo, setMissionInfo } = useState([]);

  // useEffect(() => {
  //   const fetchMission = async () => {
  //     const datas = await getMissionInfo({ key });
  //     setMissionInfo(datas);
  //     console.log(missionInfo);
  //   };

  //   fetchMission();
  // }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Layout showNavBar={false} showHeader={false}>
      <Page>
        <div id="back-button" onClick={handleBack}>
          <IoIosArrowBack size={18} />
        </div>
        <img
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDExMTlfNSAg%2FMDAxNzMxOTQ3Nzg0NDgz.sET_o7XTucDHjhJqr_7G0we7stnijLkLO_vjZ4dPRVcg.mxXwN_qyP6ITuzAUzoKajp48JNGPpvc0Syn-MQpfH08g.JPEG%2FIMG_3247.jpg&type=sc960_832"
          alt="미션사진"
        />

        <MisstionDefaultInfo>
          <UserNickName>
            부산토박임니더
            <IoIosArrowForward />
          </UserNickName>
          <Title>가서 사진만 찍으면 된당</Title>
          <div id="date-and-join">
            <span id="date">2025.01.15</span>
            <span>|</span>
            <span id="join">12명 참여중</span>
          </div>
          <CategoryContainer>
            <CategoryBox />
          </CategoryContainer>
        </MisstionDefaultInfo>

        <div id="line"></div>

        <TabMenu>
          <div className={activeTab === 'mission' ? 'active' : ''} onClick={() => setActiveTab('mission')}>
            미션 설명
          </div>
          <div className={activeTab === 'certified' ? 'active' : ''} onClick={() => setActiveTab('certified')}>
            인증글(13)
          </div>
        </TabMenu>

        {activeTab === 'mission' && (
          <TabMenuContent>
            <div id="mission-content">
              그냥 가서 사진만 찍어도 인증해드릴게요~~~~~~~ 진짜 구경만 해도 힐링 그잡채!!!
            </div>

            <Location>
              <span>미션 위치</span>
              <Map></Map>
            </Location>
          </TabMenuContent>
        )}

        {activeTab === 'certified' && (
          <TabMenuContent>
            <CertifiedBox>인증된 글이 여기에 표시됩니다.</CertifiedBox>
          </TabMenuContent>
        )}

        <Footer>
          <Like>
            <IoMdHeartEmpty size={22} />
          </Like>
          <JoinButton>참여하기</JoinButton>
        </Footer>
      </Page>
    </Layout>
  );
};

export default MisstionDetailPage;

const Page = styled.div`
  position: relative;
  background-color: white;
  height: 100%;

  #back-button {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(217, 217, 217, 0.5);
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
  }

  img {
    height: 225px;
    width: 100%;
  }

  #line {
    height: 8px;
    background-color: #f6f6f6;
    margin-top: 18px;
  }
`;

const MisstionDefaultInfo = styled.div`
  padding: 0 15px;

  #date-and-join {
    margin-top: 10px;
    display: flex;
    gap: 5px;
    font-size: 14px;
    color: #929292;
  }
`;

const UserNickName = styled.div`
  display: flex;
  gap: 1px;
  align-items: center;
  font-size: 12px;
  color: #929292;
  cursor: pointer;
  margin-top: 10px;
`;

const Title = styled.h2`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 600;
`;

const CategoryContainer = styled.div`
  margin-top: 8px;
`;

const TabMenu = styled.div`
  display: flex;
  width: 100%;
  color: #929292;
  font-size: 14px;

  div {
    flex: 1;
    text-align: center;
    padding: 13px;
    cursor: pointer;
  }

  div:first-child {
    border-right: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
  }

  div:last-child {
    border-bottom: 1px solid #ededed;
  }

  /* 선택된 탭 스타일 */
  .active {
    font-weight: 600;
    color: #525252;
  }
`;

const TabMenuContent = styled.div`
  padding: 22px 15px;

  #mission-content {
    font-size: 16px;
  }
`;

const Location = styled.div`
  margin-top: 23px;

  span {
    font-size: 13px;
  }
`;

const Map = styled.div`
  margin-top: 2px;
  width: 100%;
  height: 215px;
  background-image: url(${MapImg});
  background-size: cover;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  border-top: 1px solid #ededed;
  // box-shadow: 0px -15px 10px -2px rgba(0, 0, 0, 0.05);
`;

const Like = styled.div`
  border: 1px solid #2d5b7f;
  border-radius: 8px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #2d5b7f;
  }
`;

const JoinButton = styled.button`
  outline: none;
  border-radius: 8px;
  background-color: #2d5b7f;
  font-size: 16px;
  width: 312px;
  color: white;
  font-weight: 600;
  border: none;
  height: 45px;
  cursor: pointer;
`;
