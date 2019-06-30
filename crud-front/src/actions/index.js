import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001');

    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: {
        products: response.data
      }
    });
  } catch(e) {
    console.log(e);
  }
};