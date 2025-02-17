import Layout from "../components/layout/Layout";
import { FaCamera } from "react-icons/fa";
import styled from "styled-components";

const MissionWritePage = () => {

  return (
    <Layout showHeader={false}>
      <Page>
      <Header>미션작성</Header>
      <CategoryContainer>
        <p>미션의 장소와 관련된 키워드를 선택하세요.</p>
        <div id="category-items-box">
          <div className="category-item">관광명소</div>
        </div>
      </CategoryContainer>
      <InputBox>
        <span>제목</span>
        <input />
      </InputBox>
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

export default MissionWritePage;

const Page = styled.div`
  position: relative;
  background-color: white;
  height: 100%;
  padding: 0 15px;
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

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  #category-items-box {
    
  }

  .category-item {
    border: 1px solid #EDEDED;
    border-radius: 18px;
    padding: 8px 15px;
    width: fit-content;
    font-size: 14px;
    cursor: pointer;
  }
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