import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const StyledAboutSection = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  max-width: 60vw;
  min-height: 100vh;

  div {
    display: flex;
  }

  h2 {
    text-align: start;
    display: flex;
    align-items: center;
    &:after {
      content: '';
      display: block;
      width: 50vw;
      height: 1px;
      background: grey;
      margin-left: 15px;
    }
  }

  p {
    text-align: justify;
    max-width: 90vw;
  }

  span {
    color: #efb357;
  }

  @media (max-width: 1100px) {
    margin-top: 200px;
    max-width: 90vw;

    div {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    section {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
    }
  }
`;

const StyledPic = styled.section`
  position: relative;
  left: 30px;

  img {
    width: 300px;
    border-radius: 10px;
    position: absolute;
    transform: translate(-15px, -15px);
    transition: transform 0.5s;
    z-index: 1;
    &:hover {
      transform: translate(-10px, -10px);
    }
  }

  div {
    width: 300px;
    height: 280px;
    border: 3px solid #3bafca;
    border-radius: 10px;
    position: relative;
  }

  @media (max-width: 1100px) {
    div {
      display: none;
      justify-content: flex-start;
    }

    img {
      border-radius: 50%;
      width: 200px;
      position: relative;
    }
  }
`;

const StyledList = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  min-height: 0;
  @media (max-width: 1100px) {
    li {
      margin: 0 10px;
    }
  }
`;

function About() {
  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Jest',
    'CSS3',
    'Node.js',
    'MySQL',
    'MongoDB',
    'Express.js'
  ];

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <StyledAboutSection data-aos="fade-up" data-aos-delay="50" id="about">
      <h2>About Me</h2>
      <div>
        <section>
          <p>
            Hi! My name is Leandro and I like to create things that live on the
            internet. My interest in web development led me in 2020 to
            completely change my career, leaving mechanical engineering to
            dedicate myself completely to web development, where my passion for
            what I do has only increased.
          </p>

          <p>
            I&apos;m currently diving a little deeper into the back end at
            Trybe, where I have the privilege to carry out several front end and
            back end projects. Always using very current technologies. My main
            focus these days is to <span>find a job</span> where I can further
            develop these skills and start my web developer career.
          </p>

          <p>
            Here are a few technologies I&apos;ve been working with recently:{' '}
          </p>

          <StyledList>
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </StyledList>
        </section>

        <section>
          <StyledPic data-aos="fade-left" data-aos-delay="500">
            <img src="images/me.png" alt="Leandro" />
            <div />
          </StyledPic>
        </section>
      </div>
    </StyledAboutSection>
  );
}

export default About;
