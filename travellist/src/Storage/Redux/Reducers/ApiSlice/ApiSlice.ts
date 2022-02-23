import {createSlice, SerializedError} from '@reduxjs/toolkit';
import {ApiTypes} from '@Api';
import {ApiActions} from '../../Actions';

interface ApiState {
  hotels: ApiTypes.IHotel[];
  error?: SerializedError;
  loading: boolean;
  currentRequestId?: string;
}

const initialState: ApiState = {
  hotels: [],
  error: {},
  loading: false,
  currentRequestId: '',
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
        state.error = action.error;
      }
      state.loading = false;
      state.error = action.error;
      state.currentRequestId = undefined;
    });
  },
});

export default ApiSlice.reducer;
