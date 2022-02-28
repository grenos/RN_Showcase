import {createSlice} from '@reduxjs/toolkit';
import {ApiTypes} from '@Api';
import {FilterActions} from '../../Actions';

export interface FilterState {
  filteredHotels: ApiTypes.IHotel[];
  starsToFilter: number;
  isFlterActive: boolean;
}

const initialState: FilterState = {
  filteredHotels: [],
  starsToFilter: 0,
  isFlterActive: false,
};

export const FilterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    resetFilterState: state => {
      state.filteredHotels = [];
      state.starsToFilter = 0;
      state.isFlterActive = false;
    },

    setFiltersIsActive: (state, action) => {
      state.isFlterActive = action.payload;
    },

    setNumberOfStars: (state, action) => {
      state.starsToFilter = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(
      FilterActions.setHotelsWithStarFilter.fulfilled,
      (state, action) => {
        state.filteredHotels = action.payload;
      },
    );
  },
});

export default FilterSlice.reducer;
