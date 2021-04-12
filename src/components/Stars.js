import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

// ------------------ COMPONENT ------------------
const Stars = () => {
  return <h4>stars</h4>;
};

// ------------------ STYLE ------------------
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;

// ------------------ EXPORT ------------------
export default Stars;
