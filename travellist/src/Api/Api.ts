import {IHotel} from './types';

export const fetchHotels = async (): Promise<Array<IHotel>> => {
  const url = 'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507';

  const params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = await fetch(url, params);
  return res.json();
};
