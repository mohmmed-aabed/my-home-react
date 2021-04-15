import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, gridView: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, gridView: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state;
    let sortedProducts = [...filteredProducts];
    if (sort === 'price-lowest') {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === 'price-highest') {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === 'name-a') {
      sortedProducts = sortedProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === 'name-z') {
      sortedProducts = sortedProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filteredProducts: sortedProducts };
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
