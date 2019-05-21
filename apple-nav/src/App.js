import React from 'react';
import NavWrapper from './components/nav/NavWrapper';
import NavButton from './components/nav/NavButton';
import styled from 'styled-components';
import './App.css';

const AppStyles = styled.div`
  text-align: center;
`

const NavWrapperStyles = styled.div`
  height: 44px;
  background-color: #313131;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  -webkit-font-smoothing: antialiased;
`
const ButtonIcon = styled.button`
  background-color: #313131;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin: 0 30px;

  &:hover {
        color: lightgray;
    }
`

const App = props => {
  return (
    <AppStyles>
      <NavWrapperStyles>
        <NavWrapper>
          <ButtonIcon><i className="fab fa-apple"></i></ButtonIcon>
          <NavButton text="Mac" />
          <NavButton text="iPad" />
          <NavButton text="iPhone" />
          <NavButton text="Watch" />
          <NavButton text="TV" />
          <NavButton text="Support" />
          <ButtonIcon><i className="fas fa-search"></i></ButtonIcon>
          <ButtonIcon><i className="fas fa-shopping-bag"></i></ButtonIcon>
        </NavWrapper>
      </NavWrapperStyles>
    </AppStyles>
  );
}


export default App; 

