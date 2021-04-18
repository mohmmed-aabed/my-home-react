import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

// ------------------ COMPONENT ------------------
const Filters = () => {
  const {
    filters: {
      text,
      company,
      category,
      color,
      minPrice,
      maxPrice,
      price,
      shipping,
    },
    allProducts,
    updateFilters,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, 'category');
  const companies = getUniqueValues(allProducts, 'company');
  const colors = getUniqueValues(allProducts, 'colors');

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>

          <div className='form-container'>
            <div>
              {/* categories */}
              <div className='form-control'>
                <h5>category</h5>
                <div>
                  {categories.map((cat, index) => {
                    return (
                      <button
                        key={index}
                        onClick={updateFilters}
                        name='category'
                        type='button'
                        className={
                          category === cat.toLowerCase() ? 'active' : ''
                        }
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
              {/* companies */}
              <div className='form-control'>
                <h5>company</h5>
                <select
                  name='company'
                  value={company}
                  onChange={updateFilters}
                  className='company'
                >
                  {companies.map((com, index) => {
                    return (
                      <option key={index} value={com}>
                        {com}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div>
              {/* colors */}
              <div className='form-control'>
                <h5>colors</h5>
                <div className='colors'>
                  {colors.map((col, index) => {
                    if (col === 'all') {
                      return (
                        <button
                          key={index}
                          name='color'
                          onClick={updateFilters}
                          data-color='all'
                          className={
                            color === 'all' ? 'all-btn active' : 'all-btn'
                          }
                        >
                          all
                        </button>
                      );
                    }
                    return (
                      <button
                        key={index}
                        name='color'
                        style={{ background: col }}
                        className={
                          color === col ? 'color-btn active' : 'color-btn'
                        }
                        data-color={col}
                        onClick={updateFilters}
                      >
                        {color === col ? <FaCheck /> : null}
                      </button>
                    );
                  })}
                </div>
              </div>
              {/* prices */}
              <div className='form-control'>
                <h5>price</h5>
                <p className='price'>{formatPrice(price)}</p>
                <input
                  type='range'
                  name='price'
                  min={minPrice}
                  max={maxPrice}
                  onChange={updateFilters}
                  value={price}
                />
              </div>
              {/* free shipping */}
              <div className='form-control shipping'>
                <label htmlFor='shipping'>free shipping</label>
                <input
                  type='checkbox'
                  name='shipping'
                  id='shipping'
                  onChange={updateFilters}
                  checked={shipping}
                />
              </div>
            </div>
          </div>
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

// ------------------ STYLE ------------------
const Wrapper = styled.section`
  .form-container {
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    width: 300px;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    letter-spacing: var(--spacing);
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
    letter-spacing: 1px;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.75rem;
    font-size: 1rem;
    input {
      margin-top: 4px;
    }
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.5rem;
    border-radius: var(--radius);
    width: 200px;
    transform: var(--transition);
    margin-top: 0.5rem;
  }
  .clear-btn:hover {
    background: var(--clr-red-light);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
    .search-input {
      width: 200px;
    }
    .form-container {
      display: block;
    }
  }
`;

// ------------------ EXPORT ------------------
export default Filters;
