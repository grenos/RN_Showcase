import {createSlice} from '@reduxjs/toolkit';
import {ApiTypes} from '@Api';
import {FilterActions} from '../../Actions';

interface FilterState {
  searchedHotels: ApiTypes.IHotel[];
}

const initialState: FilterState = {
  searchedHotels: [],
};

export const FilterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    resetFilterState: state => {
      state.searchedHotels = [];
    },
  },

  extraReducers: builder => {
    builder.addCase(
      FilterActions.setSearchedHotels.fulfilled,
      (state, action) => {
        state.searchedHotels = action.payload;
      },
    );
  },
});

export default FilterSlice.reducer;
