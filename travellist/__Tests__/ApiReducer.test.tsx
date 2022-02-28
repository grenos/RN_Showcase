import {data} from './Utils/data';
import {ApiReducer, ApiState, ApiActions} from '@Storage/Redux';

const initialState: ApiState = {
  hotels: [],
  error: '',
  loading: false,
  currentRequestId: undefined,
};

describe('Api Reducer', () => {
  test('should return the initial state', () => {
    expect(ApiReducer(undefined, {type: ''})).toEqual(initialState);
  });

  test('should modify state correctly on fetch hotel action', () => {
    const action = {
      type: ApiActions.fetchHotels.fulfilled.type,
      payload: data,
    };
    const state = ApiReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      hotels: data,
    });
  });
});
