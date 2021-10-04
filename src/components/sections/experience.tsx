import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import jobs from 'content/jobs';
import studies from 'content/studies';

const StyleExpSection = styled.section`
  width: 80vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin-left: 80px;

  h2 {
    text-align: start;
    display: flex;
    align-items: center;
    &:after {
      content: '';
      display: block;
      width: 100px;
      height: 1px;
      background: #707881;
      margin-left: 15px;
    }
  }

  section {
    display: flex;
    justify-content: flex-start;
  }

  h3 {
    color: #3bafca;
    transition: 0.5s;
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 1px
      no-repeat;
    &:hover {
      --d: 100%;
    }
  }

  code {
    font-size: 12px;
    color: #707881;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 1100px) {
    margin-top: 200px;
    max-width: 100vw;
  }

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    margin-left: -120px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-width: 30vw;
  max-width: 400px;
  margin: 35px;

  li {
    margin: 15px 0;
  }

  @media (max-width: 780px) {
    margin-left: 50px;
    max-width: 50vw;
    ul,
    p {
      width: 70vw;
    }
  }
`;

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <StyleExpSection>
      <section data-aos="fade-right" id="experience">
        <StyledDiv>
          <h2>Where I&apos;ve Worked</h2>
          {jobs.map((el) => (
            <>
              <a href={el.url} target="_blank" rel="noreferrer">
                <h3>{el.company}</h3>
              </a>
              <span>{el.name}</span>
              <code>{el.period}</code>
              <ul>
                {el.description.map((elem, idx) => (
                  <li key={idx}>{elem}</li>
                ))}
              </ul>
            </>
          ))}
        </StyledDiv>
      </section>
      <hr />
      <section data-aos="fade-left">
        <StyledDiv>
          <h2>Where I&apos;ve Studied</h2>
          {studies.map((el) => (
            <>
              <a href={el.url} target="_blank" rel="noreferrer">
                <h3>{el.school}</h3>
              </a>
              <span>{el.name}</span>
              <code>{el.period}</code>
              <p>{el.description}</p>
            </>
          ))}
        </StyledDiv>
      </section>
    </StyleExpSection>
  );
}

export default Experience;
