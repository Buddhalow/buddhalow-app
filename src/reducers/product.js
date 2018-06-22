export const initialState = 'aquafulness';

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'PRODUCT_REPLACE': {
      if (action.product) {
        return action.product;
      }
      return initialState;
    }
    default:
      return state;
  }
}
