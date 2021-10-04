import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  text-align: center;
  height: 80vh;

  p {
    max-width: 800px;
    min-width: 300px;
  }

  @media (max-width: 780px) {
    width: 80vw;
  }
`;

const IconsWrapper = styled.section`
  display: flex;
  width: 300px;
  justify-content: space-around;
  font-size: 30px;
  margin-top: 50px;

  a {
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
      color: #efb357;
    }
  }
`;

const EmailBtn = styled.a`
  text-decoration: none;
  margin: 40px 0;
  background-color: #efb357;
  color: #222a36;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 15px 15px 25px -2px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
  transition: transform 0.3s;
  &:hover {
    opacity: 1;
    transform: scale(1.08);
  }
`;

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <StyledContactSection data-aos="fade-up" data-aos-duration="2000">
      <h2 id="contact">Contact Me</h2>
      <p>
        I am currently looking for new opportunities, let me know if you have
        any interest. If you have any questions or just want to say hi, my inbox
        is always open :D
      </p>

      <EmailBtn href="mailto:lleandrofr@gmail.com"> Say Hello</EmailBtn>

      <IconsWrapper data-aos="fade-up" data-aos-duration="3000">
        <a
          href="https://github.com/leandrofcr"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <FiGithub />{' '}
        </a>
        <a
          href="https://www.linkedin.com/in/leandrofcr/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <FiLinkedin />{' '}
        </a>
        <a
          href="https://www.instagram.com/leandrofcr/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <FiInstagram />{' '}
        </a>
      </IconsWrapper>
    </StyledContactSection>
  );
}

export default Contact;
