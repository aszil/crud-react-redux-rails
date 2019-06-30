const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload.products
      };

    case 'ADD_PRODUCT':
      return {
        ...state,
        products: state.products.concat(action.payload.products)
      };

    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.concat(action.payload.products)
      };

    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: action.payload.products
      };

    default:
      return state;
  }
};