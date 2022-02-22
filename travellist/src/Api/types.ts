type Locaton = {
  address: string;
  city: string;
  latitude: number;
  longitude: number;
};

type CheckInOut = {
  from: string;
  to: string;
};

type ContactInfo = {
  phoneNumber: string;
  email: string;
};

export interface IHotel {
  id: number;
  name: string;
  location: Locaton;
  stars: number;
  checkIn: CheckInOut;
  checkOut: CheckInOut;
  contact: ContactInfo;
  gallery: string[];
  userRating: number;
  price: number;
  currency: string;
}
