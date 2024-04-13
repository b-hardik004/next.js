import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL_GET_ALBUMS } from '../../constant/constants';
import { APIService } from '../../services/apiService';

export type ApiBlogType = {
    userId: number,
    id: number,
    title: string
}

const API_DATA_THUNK_NAME = 'api/getAllData';
const initialState = {
    apiBlogData: [],
    loading: false
} as any;

export const fetchApiData = createAsyncThunk<ApiBlogType[]>(API_DATA_THUNK_NAME, async (thunkApi) => {
    const response = await APIService.get(URL_GET_ALBUMS);
    const data = await response.data;
    return data;
});

export const apiBlogSlice = createSlice({
    name: 'apiBlogData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApiData.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchApiData.fulfilled, (state, action) => {
            state.apiBlogData.length = 0;
            state.apiBlogData.push(...action.payload);
            state.loading = false;
        });
    }
});

export default apiBlogSlice.reducer;
