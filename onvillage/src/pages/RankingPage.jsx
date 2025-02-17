import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';

const RankingPage = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [rank, setRank] = useState([]);

  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/ranking`);
        const dataWithRank = response.data.ranking;
        setRank(dataWithRank);
      } catch (error) {
        console.log('랭킹 정보 가져오기 실패:', error);
      }
    };

    fetchRankingData();
  }, []); // 컴포넌트가 처음 마운트될 때 한 번만 호출

  return (
    <Layout showHeader={false}>
      <Page>
        <Header>미션작성</Header>

        <RankingTop>
          {rank[1] && (
            <div className="yellow-box">
              <span className="grade">2</span>
              <img src={rank[1].profile} alt="프로필사진" />
              <span className="nickname">{rank[1].name}</span>
              <span className="write-score">제작: {rank[1].missionCount}</span>
              <span className="join-score">참여: {rank[1].achievementCount}</span>
            </div>
          )}
          {rank[0] && (
            <div id="blue-box">
              <span className="grade">1</span>
              <img src={rank[0].profile} alt="프로필사진" />
              <span className="nickname">{rank[0].name}</span>
              <span className="write-score">제작: {rank[0].missionCount}</span>
              <span className="join-score">참여: {rank[0].achievementCount}</span>
            </div>
          )}
          {rank[2] && (
            <div className="yellow-box">
              <span className="grade">3</span>
              <img src={rank[2].profile} alt="프로필사진" />
              <span className="nickname">{rank[2].name}</span>
              <span className="write-score">제작: {rank[2].missionCount}</span>
              <span className="join-score">참여: {rank[2].achievementCount}</span>
            </div>
          )}
        </RankingTop>

        {/* <RankingResult>
        <span className="grade-bottom">Rank</span>
        <span className="nickname-bottom">User</span>
        <span className="write-score-bottom">Points</span>
      </RankingResult> */}

        <RankingBottom>
          {rank.slice(3, Math.min(10, rank.length)).map((rank, index) => (
            <div className="ranking-item">
              <span className="grade-bottom">{index + 4}</span>
              <span className="nickname-bottom">{rank.name}</span>
              <div>
                <span className="write-score-bottom">제작: {rank.missionCount}</span>
                <span className="join-score-bottom">참여: {rank.achievementCount}</span>
              </div>
            </div>
          ))}
        </RankingBottom>
      </Page>
    </Layout>
  );
};

export default RankingPage;

const Page = styled.div`
  position: relative;
  background-color: white;
  height: 100%;
  padding: 0 15px;
  background: linear-gradient(162.4deg, #2d5b7f 7.35%, #e6cfb0 69.45%);
`;

const Header = styled.div`
  width: 400px;
  margin: 0 -15px;
  height: 55px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ededed;
  font-size: 16px;
`;

const RankingTop = styled.div`
  margin-top: 42px;
  display: flex;
  color: white;
  font-weight: 600;
  gap: 14px;

  div {
    position: relative;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 13px;
  }

  img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    margin-bottom: 5px;
  }

  .yellow-box {
    background-color: #e6cfb0;
    width: 100px;
    height: 137px;
    margin-top: 65px;
  }

  #blue-box {
    background-color: #2d5b7f;
    width: 135px;
    height: 167px;

    .grade {
      font-size: 32px;
      top: -30px;
    }
    .nickname {
      font-size: 16px;
      margin-top: 15px;
    }
    .write-score,
    .join-score {
      font-size: 14px;
    }
  }

  .grade {
    position: absolute;
    top: -20px;
    left: 45%;
    font-size: 24px;
  }

  .nickname {
    font-size: 14px;
    margin-bottom: 11px;
  }

  .write-score,
  .join-score {
    font-size: 12px;
  }
`;

// const RankingResult = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-weight: 500;
//   background-color: #002745;
//   border-radius: 5px;
//   padding: 10px 5px;
//   color: white;

//   .grade-bottom {
//     width: 20px;
//   }

//   .nickname-bottom {
//     width: 220px;
//   }

//   .write-score-bottom, .join-score-bottom {
//     width: 53px;
//   }
// `

const RankingBottom = styled.div`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 3px;

  .ranking-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 15px 10px;
    border-radius: 15px;
    background-color: white;
    gap: 3px;

    div {
      display: flex;
      gap: 8px;
    }
  }

  .grade-bottom {
    width: 20px;
    margin-right: 10px;
    text-align: end;
  }

  .nickname-bottom {
    width: 220px;
  }

  .write-score-bottom,
  .join-score-bottom {
    width: 53px;
    font-size: 14px;
  }
`;
