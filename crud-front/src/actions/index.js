import axios from 'axios';
import update from 'react-addons-update';
import history from '../history';

export const fetchProducts = () => async dispatch => {
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

export const addProduct = term => async (dispatch, getState) => {
  const { products } = getState().products

  try {
    const response = await axios.post('http://localhost:3001/products', { product: term });
    const newData = update(products, { $push:[response.data] });

    dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        products: newData
      }
    });

    history.push('/');
  } catch(e) {
    console.log(e);
  }
};

export const updateProduct = (id, term) => async (dispatch, getState) => {
  const { products } = getState().products;

  try {
    const response = await axios.put(`http://localhost:3001/products/${id}`, { product: term });
    const updateProducts = update(products, { id: { $set: response.data } });

    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: {
        products: updateProducts
      }
    });

    history.push('/');
  } catch(e) {
    console.log(e);
  }
};

export const deleteProduct = (id, i) => async (dispatch, getState) => {
  const { products } = getState().products;

  try {
    await axios.delete(`http://localhost:3001/products/${id}`);
    const updateProducts = update(products, { $splice: [[i, 1]]});
    console.log(updateProducts);

    dispatch({
      type: 'DELETE_PRODUCT',
      payload: {
        products: updateProducts
      }
    });
  } catch(e) {
    console.log(e);
  }
};