import {CardList} from '@Components';
import * as React from 'react';
import {render} from './Utils/TestingUtils';
import {data} from './Utils/data';

test('should render Card with correct data', () => {
  const {getByText} = render(<CardList data={[data[0]]} />, {});

  const title = getByText('Park Plaza London Waterloo');
  const address = getByText('6 Hercules Road');
  const city = getByText('London');
  const price = getByText('120.00 $');
  const userRating = getByText('9.8');
  const stars = getByText('4');

  expect(title).toBeTruthy();
  expect(address).toBeTruthy();
  expect(city).toBeTruthy();
  expect(price).toBeTruthy();
  expect(userRating).toBeTruthy();
  expect(stars).toBeTruthy();
});
