import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {ApiTypes} from '@Api';
import {Flex, CustomImage} from '@Components';

type Props = {
  hotel: ApiTypes.IHotel;
};

const Card: React.FC<Props> = ({hotel}) => {
  return (
    <Flex direction="row" justify="flex-start" styles={s.cardContainer}>
      <CustomImage image={hotel.gallery[0]} />
      <Text>{hotel.name}</Text>
    </Flex>
  );
};

export default Card;

const s = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    height: 120,
    width: '90%',
    marginTop: 30,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
