import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  font-size: 12px;
  color: #707881;
  padding: 20px;
  margin-top: 50px;

  a {
    text-decoration: none;
    color: inherit;
    transition: 0.3s;
    &:hover {
      color: #efb357;
    }
  }
  @media (max-width: 1100px) {
    margin-top: 130px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <a href="https://github.com/leandrofcr" target="_blank" rel="noreferrer">
        <code> Designed &amp; Built by Leandro Reis </code>
      </a>
    </FooterWrapper>
  );
}

export default Footer;
