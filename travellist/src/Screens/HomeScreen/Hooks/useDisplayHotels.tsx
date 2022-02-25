import {ApiSelectors, useAppSelector, FilterSelectors} from '@Storage/Redux';

export const useDisplayHotels = (isSearching: boolean) => {
  const hotels = useAppSelector(ApiSelectors.getHotels);
  const searchedHotels = useAppSelector(FilterSelectors.getSearchedHotels);
  return isSearching ? searchedHotels : hotels;
};
