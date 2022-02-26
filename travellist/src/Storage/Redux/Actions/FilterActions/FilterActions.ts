import {createAsyncThunk} from '@reduxjs/toolkit';
import type {RootState} from '../../Store';
import {ApiTypes} from '@Api/index';
import {FilterSlice} from '../../Reducers/FilterSlice/FilterSlice';

export const setHotelsWithStarFilter = createAsyncThunk<
  ApiTypes.IHotel[],
  {stars: number}
>('Filter/Get stared Hotels', async ({stars}, thunkApi) => {
  const {ApiSlice} = thunkApi.getState() as RootState;
  const {hotels} = ApiSlice;

  const foundHotels = hotels.filter(hotel => hotel.stars >= stars);
  return foundHotels.length > 0 ? foundHotels : [];
});

export const {resetFilterState, setFiltersIsActive, setNumberOfStars} =
  FilterSlice.actions;
