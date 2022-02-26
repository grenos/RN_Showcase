import {RootState} from '../../Store';

export const getSearchedHotels = (state: RootState) =>
  state.FilterSlice.searchedHotels;

export const getMaxNumberOfStars = (state: RootState) => {
  const hotels = state.ApiSlice.hotels;
  const mutableArray = [...hotels];
  mutableArray.sort((a, b) =>
    a.stars < b.stars ? 1 : b.stars < a.stars ? -1 : 0,
  );
  return mutableArray[0].stars;
};

export const getIsFilterActive = (state: RootState) =>
  state.FilterSlice.isFlterActive;

export const getNumberOfStars = (state: RootState) =>
  state.FilterSlice.starsToFilter;
