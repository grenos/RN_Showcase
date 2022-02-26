import {createSlice} from '@reduxjs/toolkit';
import {ApiTypes} from '@Api';
import {FilterActions} from '../../Actions';

interface FilterState {
  searchedHotels: ApiTypes.IHotel[];
  starsToFilter: number;
  isFlterActive: boolean;
}

const initialState: FilterState = {
  searchedHotels: [],
  starsToFilter: 0,
  isFlterActive: false,
};

export const FilterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    resetFilterState: state => {
      state.searchedHotels = [];
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
      FilterActions.setSearchedHotels.fulfilled,
      (state, action) => {
        state.searchedHotels = action.payload;
      },
    );

    builder.addCase(
      FilterActions.setHotelsWithStarFilter.fulfilled,
      (state, action) => {
        state.searchedHotels = action.payload;
      },
    );
  },
});

export default FilterSlice.reducer;
