import React from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

// ------------------ PAGE ------------------
const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        <h1></h1>
      </Wrapper>
    </main>
  );
};

// ------------------ EXPORT ------------------
const Wrapper = styled.div``;
export default CheckoutPage;
