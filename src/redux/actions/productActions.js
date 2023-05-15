import axios from 'axios';
import Config from 'react-native-config';
import {SET_ALL_PRODUCTS} from '../constants/action-types';

/* TODO 
- figure out env file.
*/
const process = Config.REACT_APP_BASE_URL;
// REACT_APP_BASE_URL =https://dummyjson.com/

export const getAllProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      dispatch({
        type: SET_ALL_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      // Handle the error here
      console.error('An error occurred while fetching products:', error);
    }
  };
};
