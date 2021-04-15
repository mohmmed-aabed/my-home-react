import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.jpg';

// ------------------ COMPONENT ------------------
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          suscipit laudantium dolores reprehenderit placeat assumenda! Sint
          dolorum quae minima animi sed iste numquam? Animi consequuntur, totam
          aut asperiores doloremque explicabo!
        </p>
        <Link to='./products' className='btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={hero} alt='hero' className='main-img' />
      </article>
    </Wrapper>
  );
};

// ------------------ STYLE ------------------
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  h1 {
    line-height: 1.25;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 6rem);
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 500px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
  }
`;

// ------------------ EXPORT ------------------
export default Hero;
