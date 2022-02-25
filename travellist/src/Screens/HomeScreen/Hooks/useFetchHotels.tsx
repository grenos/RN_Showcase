import {ApiActions, useAppDispatch} from '@Storage/Redux';
import {useCallback, useEffect} from 'react';

export const useFetchHotels = () => {
  const dispatch = useAppDispatch();

  const fetch = useCallback(() => {
    dispatch(ApiActions.fetchHotels());
  }, [dispatch]);

  useEffect(() => {
    fetch();
  }, [fetch]);
};
