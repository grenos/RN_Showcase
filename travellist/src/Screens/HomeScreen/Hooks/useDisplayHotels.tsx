import {ApiSelectors, useAppSelector, FilterSelectors} from '@Storage/Redux';

export const useDisplayHotels = () => {
  const hotels = useAppSelector(ApiSelectors.getHotels);
  const isFilterActive = useAppSelector(FilterSelectors.getIsFilterActive);
  const filteredHotels = useAppSelector(FilterSelectors.getFilteredHotels);
  return isFilterActive
    ? [filteredHotels, isFilterActive]
    : [hotels, isFilterActive];
};
