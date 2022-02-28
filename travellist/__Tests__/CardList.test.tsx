import {CardList} from '@Components';
import * as React from 'react';
import {render} from './Utils/TestingUtils';

const data = [
  {
    id: 12321,
    name: 'Park Plaza London Waterloo',
    location: {
      address: '6 Hercules Road',
      city: 'London',
      latitude: 51.49845,
      longitude: -0.11343,
    },
    stars: 4,
    checkIn: {
      from: '14:00',
      to: '20:00',
    },
    checkOut: {
      from: '07:00',
      to: '10:00',
    },
    contact: {
      phoneNumber: '+39 24322342',
      email: 'park_plaza@gmail.com',
    },
    gallery: [
      'https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1499779963/Swindon_yjsrwz.jpg',
    ],
    userRating: 9.8,
    price: 120,
    currency: 'EUR',
  },
];

test('should render Card with correct data', () => {
  const {getByText} = render(<CardList data={data} />, {});

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
