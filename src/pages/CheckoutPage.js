import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
// import {StripeCheckout } from '../components';
// import { useCartContext } from '../context/cart_context';
// import { Link } from 'react-router-dom';

// ------------------ PAGE ------------------
const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'></Wrapper>
    </main>
  );
};

// ------------------ EXPORT ------------------
const Wrapper = styled.div``;
export default CheckoutPage;
