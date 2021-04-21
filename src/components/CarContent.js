import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

// ------------------ COMPONENT ------------------
const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

// ------------------ STYLE ------------------
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
    outline: none;
  }
  .link-btn:hover {
    background: var(--clr-primary-6);
  }
  .clear-btn {
    background: var(--clr-black);
  }
  .clear-btn:hover {
    background: #444;
  }
  @media screen and (max-width: 480px) {
    .link-container {
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
      .link-btn {
        margin-bottom: 1.5rem;
      }
    }
  }
`;

// ------------------ EXPORT ------------------
export default CartContent;
