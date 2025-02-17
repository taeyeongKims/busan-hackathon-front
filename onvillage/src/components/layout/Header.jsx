import styled from "styled-components";
import Logo from "../../assets/Logo.png";

function Header() {

  return (
    <Container>
      {/* <meta name="viewport" content="width=device-width,initial-scale=1" /> */}
      <img src={Logo} alt="Logo" />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  padding: 0 15px;

  img {
    width: 55px;
  }
`