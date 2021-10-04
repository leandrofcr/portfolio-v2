import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineExternalLink } from 'react-icons/hi';
import projects from '../../content/projects';

const StyledSectionWrapper = styled.section`
  min-width: 60vw;
  text-align: center;
  margin: 50vh 0;

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
  section a {
    text-decoration: none;
    &:hover {
      --d: 0;
    }
  }
`;

const StyledCard = styled.section`
  display: flex;
  align-items: center;
  margin-top: 15px 0;

  &:nth-child(odd) {
    flex-direction: row-reverse;
    div {
      right: -50px;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
  }

  img {
    max-width: 400px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 15px 15px 25px -2px rgba(0, 0, 0, 0.5);
    transition: transform 0.5s;
    &:hover {
      transform: scale(1.1);
      z-index: 2;
    }
    @media (max-width: 576px) {
      width: 300px;
    }
  }

  section {
    position: relative;
    min-width: 300px;
    max-width: 500px;
    text-align: left;
    padding: 5px 20px;
    border-radius: 5px;
    background-color: #212935;
    opacity: 0.98;
    box-shadow: 15px 15px 25px -2px rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.01);
    }
  }

  code {
    display: inline-block;
    margin: 7px 10px;
    color: #707881;
    background-color: #29313d;
    padding: 0 10px;
    border-radius: 10px;
  }

  p {
    /* min-width: 400px; */
    padding: 0 5px;
    text-align: justify;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    section {
      position: unset;
      width: 60vw;
    }
  }
`;

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <StyledSectionWrapper>
      <h2 id="projects">Some Things I&apos;ve Built</h2>

      {/* <p>
        All available on my page on
        <a href="https://github.com/leandrofcr" target="_blank" rel="noreferrer">github</a>
      </p> */}
      {projects.map((pr, i) => (
        <StyledCard
          key={pr.name}
          data-aos="fade-up"
          data-aos-delay={i === 0 ? 0 : i * 100}
        >
          <a href={pr.url} target="_blank" rel="noreferrer">
            <img src={pr.image} alt={` The ${pr.name} project`} />
          </a>
          <section>
            <a href={pr.url} target="_blank" rel="noreferrer">
              {pr.name} <HiOutlineExternalLink />
            </a>
            <p>
              {pr.description}
              <div>
                {pr.tags.map((tg) => (
                  <code key={tg}>{tg}</code>
                ))}
              </div>
            </p>
          </section>
        </StyledCard>
      ))}
      <a href="https://github.com/leandrofcr" target="_blank" rel="noreferrer">
        See more on my Github <HiOutlineExternalLink />
      </a>
    </StyledSectionWrapper>
  );
}

export default Projects;
