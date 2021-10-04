import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const StyledHeaderSection = styled.section`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: fixed;
  background-color: #212935;
  z-index: 2;

  span {
    color: #3bafca;
    background-color: #29313d;
    padding: 7px;
    border-radius: 50%;
  }

  a {
    text-decoration: none;
    margin: 0 10px;
    color: #707881;
    font-weight: 600;
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 1px
      no-repeat;
    transition: 0.5s;
    &:hover {
      color: #efb357;
      --d: 100%;
    }
  }

  @media (max-width: 1100px) {
    justify-content: space-evenly;
    font-size: 0.8em;
  }
`;

function Header() {
  return (
    <StyledHeaderSection>
      <span>LR</span>
      <nav>
        <AnchorLink offset="100" href="#about">
          About
        </AnchorLink>
        <AnchorLink offset="100" href="#experience">
          Experience
        </AnchorLink>
        <AnchorLink offset="100" href="#projects">
          Projects
        </AnchorLink>
        <AnchorLink offset="100" href="#contact">
          Contact
        </AnchorLink>
      </nav>
    </StyledHeaderSection>
  );
}

export default Header;
