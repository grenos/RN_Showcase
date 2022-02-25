import {createAsyncThunk} from '@reduxjs/toolkit';
import type {RootState} from '../../Store';
import {Api, ApiTypes} from '@Api/index';

export const fetchHotels = createAsyncThunk<ApiTypes.IHotel[]>(
  'Api/Fetch Hotels',
  async (_, thunkApi) => {
    const {ApiSlice} = thunkApi.getState() as RootState;
    const {currentRequestId} = ApiSlice;
    if (thunkApi.requestId !== currentRequestId) {
      return thunkApi.rejectWithValue('Request still in loading state');
    }
    try {
      let response = await Api.fetchHotels();
      return response as ApiTypes.IHotel[];
    } catch (error) {
      return thunkApi.rejectWithValue('Generic Api Error');
    }
  },
);
