import {createSlice} from '@reduxjs/toolkit';
import {ApiTypes} from '@Api';
import {ApiActions} from '../../Actions';

export interface ApiState {
  hotels: ApiTypes.IHotel[];
  error?: string;
  loading: boolean;
  currentRequestId?: string;
}

const initialState: ApiState = {
  hotels: [],
  error: '',
  loading: false,
  currentRequestId: undefined,
};

export const ApiSlice = createSlice({
  name: 'Api',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(ApiActions.fetchHotels.pending, (state, action) => {
      state.loading = true;
      state.currentRequestId = action.meta.requestId;
    });
    builder.addCase(ApiActions.fetchHotels.fulfilled, (state, action) => {
      state.loading = false;
      state.currentRequestId = undefined;
      state.hotels = action.payload;
    });
    builder.addCase(ApiActions.fetchHotels.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.error.message;
      }
      state.loading = false;
      state.error = action.error.message;
      state.currentRequestId = undefined;
    });
  },
});

export default ApiSlice.reducer;
