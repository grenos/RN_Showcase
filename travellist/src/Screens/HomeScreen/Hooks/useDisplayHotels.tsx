import {ApiSelectors, useAppSelector, FilterSelectors} from '@Storage/Redux';

export const useDisplayHotels = () => {
  const hotels = useAppSelector(ApiSelectors.getHotels);
  const isFilterActive = useAppSelector(FilterSelectors.getIsFilterActive);
  const searchedHotels = useAppSelector(FilterSelectors.getSearchedHotels);
  return isFilterActive
    ? [searchedHotels, isFilterActive]
    : [hotels, isFilterActive];
};
