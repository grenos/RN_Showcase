import {RootState} from '../../Store';

export const getSearchedHotels = (state: RootState) =>
  state.FilterSlice.searchedHotels;
