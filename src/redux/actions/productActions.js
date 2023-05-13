import axios from 'axios';
import {SET_ALL_PRODUCTS} from '../constants/action-types';

export const getAllProducts = () => {
  return async dispatch => {
    await axios
      .get(process.env.REACT_APP_BASE_URL + 'products')
      .then(response => {
        dispatch({
          type: SET_ALL_PRODUCTS,
          payload: response.data,
        });
      });
  };
};
