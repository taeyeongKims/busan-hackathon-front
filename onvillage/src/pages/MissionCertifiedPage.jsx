import Layout from "../components/layout/Layout";
import { FaCamera } from "react-icons/fa";
import styled from "styled-components";
import MissionCard from "../components/MissionCard";

const MissionCertifiedPage = () => {

  const missionData = {
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
  };

  return (
    <Layout showHeader={false}>
      <Page>
      <Header>미션인증</Header>
      <MyMission>
        <span id="span">내가 참여한 미션</span>
        <BorderLine>
          <MissionCard
              key={missionData.missionId}
              nickname={missionData.nickname}
              title={missionData.title}
              image={missionData.image}
              scrapNumber={missionData.scrapNumber}
              applySuccessNumber={missionData.applySuccessNumber}
              date={missionData.date}
            />
        </BorderLine>
      </MyMission>
      <InputBox>
        <span>자세한 미션 내용을 작성해주세요</span>
        <textarea></textarea>
      </InputBox>
      <ImageContainer>

      </ImageContainer>
      <ButtonContainer>
        <button id="image-upload"><FaCamera />사진 첨부하기</button>
        <button id="complete">완료</button>
      </ButtonContainer>
      </Page>
    </Layout>
  );
};

export default MissionCertifiedPage;

const Page = styled.div`
  position: relative;
  background-color: white;
  height: 100%;
  padding: 0 15px;
`

const Header = styled.div`
  width: 100%;
  padding: 18px 0;
  text-align: center;
  border-bottom: 1px solid #EDEDED;
  font-size: 16px;
`

const MyMission = styled.div`
  margin-top: 15px;

  #span {
    font-size: 16px;
  }
`

const BorderLine = styled.div`
  border: 1px solid #EDEDED;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
`

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;

  span {
    font-size: 16px;
    margin-bottom: 5px;
  }

  input {
    border: 1px solid #EDEDED;
    border-radius: 5px;
    height: 46px;
    outline: none;
    padding: 15px;
    font-size: 16px;
  }

  textarea {
    border: 1px solid #EDEDED;
    border-radius: 5px;
    height: 285px;
    resize: none;
    outline: none;
    padding: 15px;
    font-size: 16px;
  }
`

const ImageContainer = styled.div`

`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;

  button {
    height: 48px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
  }

  #image-upload {
    border: 1px solid #2D5B7F;
    color: #2D5B7F;
    background-color: unset;
  }

  #complete {
    background-color: #2D5B7F;
    color: white;
  }
`