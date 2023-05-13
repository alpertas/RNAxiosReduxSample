import {SET_ALL_PRODUCTS} from '../constants/action-types';

const initialState = [];

export default function product(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return {...state, product: action.payload};
    default:
      return state;
  }
}
