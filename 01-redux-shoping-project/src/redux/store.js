import { configureStore } from '@reduxjs/toolkit';
import '../features/card/cartSlice';

import cartReducer from '../features/card/cartSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer
  },
});
