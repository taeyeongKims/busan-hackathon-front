import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <NavBar />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export default Layout;
