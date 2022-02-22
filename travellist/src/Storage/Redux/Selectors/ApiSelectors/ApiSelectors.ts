import {RootState} from '../../Store';

export const getHotels = (state: RootState) => state.ApiSlice.hotels;
export const getApiLoadingState = (state: RootState) => state.ApiSlice.loading;
export const getApiErrorState = (state: RootState) => state.ApiSlice.error;
