import styled from "styled-components";
import Layout from "../components/layout/Layout";

const RankingPage = () => {

  return (
    <Layout showHeader={false}>
      <Page>
      <Header>미션작성</Header>

      <RankingTop>
        <div className="yellow-box">
          <span className="grade">2</span>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMjlfODEg%2FMDAxNzM1NDc0MDM4NDI0.iuSnuNB9Q45TuwjFCKgc4d0mlFwxPCTFJxJ6KBDuxMEg.PHi6A6qCvpKc5FB8L0XP6mkk5LbSIQb5jPw4vUHg7Zkg.JPEG%2F%253F%259D%25B4%253F%2584%259C_%25281%2529.jpg&type=sc960_832" alt="프로필사진" />
          <span className="nickname">닉네임</span>
          <span className="write-score">제작: 18</span>
          <span className="join-score">참여: 29</span>
        </div>
        <div id="blue-box">
          <span className="grade">1</span>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA5MTlfMzAw%2FMDAxNzI2NzUwNTgzNzkw.AekQPqZ3peslDg3SEO1Qu1zrO17306r-qyBfk2HrADAg.PZBlK8l6yprY6ZSjXSp2nd_wuqbYxY6Ney5FCzo1bSUg.JPEG%2F%25BA%25B9%25BB%25E7.jpg&type=sc960_832" alt="프로필사진" />
          <span className="nickname">닉네임</span>
          <span className="write-score">제작: 18</span>
          <span className="join-score">참여: 29</span>
        </div>
        <div className="yellow-box">
          <span className="grade">3</span>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMjlfODEg%2FMDAxNzM1NDc0MDM4NDI0.iuSnuNB9Q45TuwjFCKgc4d0mlFwxPCTFJxJ6KBDuxMEg.PHi6A6qCvpKc5FB8L0XP6mkk5LbSIQb5jPw4vUHg7Zkg.JPEG%2F%253F%259D%25B4%253F%2584%259C_%25281%2529.jpg&type=sc960_832" alt="프로필사진" />
          <span className="nickname">닉네임</span>
          <span className="write-score">제작: 18</span>
          <span className="join-score">참여: 29</span>
        </div>
      </RankingTop>

      {/* <RankingResult>
        <span className="grade-bottom">Rank</span>
        <span className="nickname-bottom">User</span>
        <span className="write-score-bottom">Points</span>
      </RankingResult> */}

      <RankingBottom>
        <div className="ranking-item">
          <span className="grade-bottom">4</span>
          <span className="nickname-bottom">어쩌라고</span>
          <div>
            <span className="write-score-bottom">제작: 18</span>
            <span className="join-score-bottom">참여: 29</span>
          </div>
        </div>
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
  background: linear-gradient(162.4deg, #2D5B7F 7.35%, #E6CFB0 69.45%);
`

const Header = styled.div`
  width: 400px;
  margin: 0 -15px;
  height: 55px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #EDEDED;
  font-size: 16px;
`

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
    background-color: #E6CFB0;
    width: 100px;
    height: 137px;
    margin-top: 65px;
  }

  #blue-box {
    background-color: #2D5B7F;
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

  .write-score, .join-score {
    font-size: 12px;
  }
`

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
  font-size: 20px;
  font-weight: 600;

  .ranking-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 15px 10px;
    border-radius: 15px;
    background-color: white;


    div {
      display: flex;
      gap: 8px;
    }
  }
  
  .grade-bottom {
    width: 20px;
  }  

  .nickname-bottom {
    width: 220px;
  }

  .write-score-bottom, .join-score-bottom {
    width: 53px;
    font-size: 14px;
  }
`