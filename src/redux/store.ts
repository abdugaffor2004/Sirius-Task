import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './slices/imagesSlice';
import { useSelector, type TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
