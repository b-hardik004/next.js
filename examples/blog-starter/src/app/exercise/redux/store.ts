import { configureStore } from '@reduxjs/toolkit';
import apiBlogSlice from './slices/api-blog-slice';

const store = configureStore({
    reducer: {
        ApiBlog: apiBlogSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
