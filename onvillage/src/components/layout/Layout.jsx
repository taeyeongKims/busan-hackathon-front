import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <NavBar />
    </div>
  );
};

const Main = styled.main`
  margin: 0 auto;
  width: 400px;
  height: 100%;
`
export default Layout;