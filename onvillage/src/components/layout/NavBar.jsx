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
        <GoHome />
        홈
      </MenuItem>

      <MenuItem>
        <RiFileEditLine />
        미션작성
      </MenuItem>

      <MenuItem>
        <BsClipboardCheck />
        미션인증
      </MenuItem>

      <MenuItem>
        <BiTrophy />
        랭킹
      </MenuItem>

      <MenuItem>
        <FaRegUser />
        마이페이지
      </MenuItem>
    </Container>
  );
};

export default NavBar;

