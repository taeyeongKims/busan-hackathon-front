import styled from "styled-components";

import { BiLike  } from "react-icons/bi";

function CertifiedBox() {

  return (
    <Container>
      <Top>
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMjVfMTg2%2FMDAxNzM3ODA4MDAyOTUz.inKHPGalQ84p-DaXC-AAJSTqN3vTqtwLzcuqZa-VtdIg.tQICJa_dnmbUAMlxXRMciQ8JkeR7osRk1V0pRU1NnRsg.JPEG%2FKakaoTalk_20250125_212532060_02.jpg&type=sc960_832" alt="인증사진" />
        <div id="like-count">
          <BiLike size={18}/>
          2
        </div>
      </Top>

      <UploadInfo>
        <span id="nickname">부산킬러</span>
        <span>|</span>
        <span id="upload-date">2025.01.18</span>
      </UploadInfo>

      <Content>
        가보니까 넘 좋다리~~~~~~
      </Content>

      {/* <LikeButton>
        좋아요
      </LikeButton> */}
    </Container>
  );
};

export default CertifiedBox;

const Container = styled.div`
  border-bottom: 1px solid #D4D4D4;
  width: 100%;
  padding: 15px 15px 10px;
  background-color: white;
`

const Top = styled.div`
 display: flex;
 justify-content: space-between;
 margin-bottom: 10px;

 img {
   width: 95px;
   height: 95px;
 }

 #like-count {
  display: flex;
  gap: 5px;
  font-weight: 600;
  color: #929292;
 }  

 svg {
  margin-top: 2px;
 }
`

const UploadInfo = styled.div`
  display: flex;
  gap: 5px;
  span {
    font-size: 14px;
    color: #929292;
  }
`

const Content = styled.div`
  padding: 3px 0;
  font-size: 18px;
`

const LikeButton = styled.button`
  border: none;
  outline: none;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  background-color: #D9D9D9;
  font-size: 14px;
`