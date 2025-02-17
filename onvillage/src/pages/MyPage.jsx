import Layout from "../components/layout/Layout";
import styled from "styled-components";

const MyPage = () => {

  return (
    <Layout>
      <Page>
        <ProfileContainer>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MTRfNiAg%2FMDAxNzIzNTk2MjEzMDM4.baFHlj_g_N-Ah5ZedAMxVQxhSoJyfT4BS9pGuBaPh2gg.m4kFWuEkO8VMqigtfUFpxQoELFiHYbFSM-_l2mad4QYg.JPEG%2FSE-f99542bb-2f1d-4f97-8099-e3c577c1e226.jpg&type=sc960_832" alt="프로필사진" />
          <span>샤인머스켓</span>
        </ProfileContainer>

        <GradeBox>
          <div>
            <span className="point">포인트</span>
            <span>34원</span>
          </div>
          <div>
            <span className="point">미션작성수</span>
            <span>15</span>
          </div>
          <div>
            <span className="point">리뷰수</span>
            <span>19</span>
          </div>
        </GradeBox>

        <Menu>
          <div>내 미션글 관리</div>
          <div>내가 찜한 미션글</div>
          <div>미션 참여 현황</div>
        </Menu>
      </Page>
    </Layout>
  );
};

export default MyPage;

const Page = styled.div`
  padding: 20px 15px;
`

const ProfileContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  span {
    font-size: 18px;
    font-weight: 600;
  }
`

const GradeBox = styled.div`
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;
  margin-top:20px;

  div {
    display: flex;
    gap: 3px;
    flex-direction: column;
    align-items: center;
  }

  .point {
    font-weight: 600;
  }
`

const Menu = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  div {
    border-radius: 5px;
    background-color: white;
    padding: 15px;
  }
`