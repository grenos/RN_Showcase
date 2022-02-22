import {createAsyncThunk} from '@reduxjs/toolkit';
import {IHotel} from '../../../../Api/types';
import type {RootState} from '../../Store';
import {Api} from '../../../../Api';

export const fetchHotels = createAsyncThunk<IHotel[]>(
  'Api/Fetch Hotels',
  async (_, thunkApi) => {
    const {ApiSlice} = thunkApi.getState() as RootState;
    const {currentRequestId} = ApiSlice;
    if (thunkApi.requestId !== currentRequestId) {
      return thunkApi.rejectWithValue('Request still in loading state');
    }
    try {
      let response = await Api.fetchHotels();
      return response as IHotel[];
    } catch (error) {
      return thunkApi.rejectWithValue(`Api Error : ${error}`);
    }
  },
);
