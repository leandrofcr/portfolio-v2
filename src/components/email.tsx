import React from 'react';
import styled from 'styled-components';

const StyledLinkWrapper = styled.div`
  transform: rotate(-90deg);
  position: fixed;
  left: -150px;
  bottom: 180px;
  font-size: 16px;

  a {
    display: flex;
    text-align: start;
    align-items: center;
    text-decoration: none;
    color: inherit;
    transition: 0.3s;
    &:hover {
      color: #3bafca;
    }
    &:before {
      content: '';
      display: block;
      width: 200px;
      height: 1px;
      background: #707881;
      margin-left: 15px;
    }
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

function Email() {
  return (
    <StyledLinkWrapper>
      <code>
        <a href="mailto:lleandrofr@gmail.com">lleandrofr@gmail.com</a>
      </code>
    </StyledLinkWrapper>
  );
}

export default Email;
