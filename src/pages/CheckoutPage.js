import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import { Link } from 'react-router-dom';

// ------------------ PAGE ------------------
const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        <h1>Checkout page</h1>
        <Link to='/products' className='btn'>
          back to products
        </Link>
      </Wrapper>
    </main>
  );
};

// ------------------ STYLE ------------------
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 2rem;
  }
`;

// ------------------ EXPORT ------------------
export default CheckoutPage;
