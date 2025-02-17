import styled from 'styled-components';

import { GoHome, GoHomeFill } from "react-icons/go";
import { RiFileEditLine, RiFileEditFill } from "react-icons/ri";
import { BsClipboardCheck, BsClipboardCheckFill } from "react-icons/bs";
import { BiTrophy, BiSolidTrophy } from "react-icons/bi";
import { FaRegUser, FaUser } from "react-icons/fa6";

function NavBar() {
 
  return (
    <Container>
      <MenuItem>
        <GoHome size={20} style={{ strokeWidth: 0.5 }}/>
        홈
      </MenuItem>

      <MenuItem>
        <RiFileEditLine size={18}/>
        미션작성
      </MenuItem>

      <MenuItem>
        <BsClipboardCheck size={17} style={{ strokeWidth: 0.5 }}/>
        미션인증
      </MenuItem>

      <MenuItem>
        <BiTrophy size={20}/>
        랭킹
      </MenuItem>

      <MenuItem>
        <FaRegUser size={18}/>
        마이페이지
      </MenuItem>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 86px;
  padding: 0 20px;
  box-shadow: 0px -15px 10px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  width: 65px;
  height: 41px;
  justify-content: space-between;
  cursor: pointer;

  svg {
    font-size: 25px;
  }
`
