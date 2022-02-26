import {createAsyncThunk} from '@reduxjs/toolkit';
import type {RootState} from '../../Store';
import {ApiTypes} from '@Api/index';
import {FilterSlice} from '../../Reducers/FilterSlice/FilterSlice';

export const setSearchedHotels = createAsyncThunk<
  ApiTypes.IHotel[],
  {text: string}
>('Filter/Searched Hotels', async ({text}, thunkApi) => {
  const {ApiSlice} = thunkApi.getState() as RootState;
  const {hotels} = ApiSlice;

  let searchedHotels = hotels.filter(item => {
    const word = item.name.replace(/ /g, '').toLowerCase();
    const found = word.indexOf(text.toLowerCase());
    return found > -1 && item;
  });
  return searchedHotels.length > 0 ? searchedHotels : [];
});

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
