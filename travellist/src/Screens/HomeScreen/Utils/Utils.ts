import {ApiTypes} from '@Api';

type Hotels = ApiTypes.IHotel[];
export const searchHotels = (hotels: Hotels, text: String): Hotels => {
  let foundHotels = hotels.filter(item => {
    const word = item.name.replace(/ /g, '').toLowerCase();
    const found = word.indexOf(text.toLowerCase());
    return found > -1 && item;
  });

  return foundHotels;
};
