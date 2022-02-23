import {StyleSheet} from 'react-native';
import React from 'react';
import {ApiTypes} from '@Api';
import {Flex, CustomImage, CustomText} from '@Components';

type Props = {
  hotel: ApiTypes.IHotel;
};

const Card: React.FC<Props> = ({hotel}) => {
  return (
    <Flex direction="row" justify="flex-start" styles={s.cardContainer}>
      <CustomImage image={hotel.gallery[0]} />

      <Flex
        direction="column"
        justify="center"
        align="flex-start"
        styles={{backgroundColor: 'red', flexGrow: 1}}>
        <CustomText body bold>
          {hotel.name}
        </CustomText>
        <Flex
          direction="row"
          justify="space-between"
          align="flex-start"
          styles={{backgroundColor: 'pink', flexGrow: 1, width: '100%'}}>
          <CustomText body>{hotel.location.city}</CustomText>
          <CustomText body>{hotel.price.toString()}</CustomText>
        </Flex>

        <Flex
          direction="row"
          justify="space-between"
          align="flex-end"
          styles={{backgroundColor: 'lime', flexGrow: 1, width: '100%'}}>
          <Flex
            direction="row"
            justify="flex-start"
            alignChild="flex-end"
            styles={{
              backgroundColor: 'blue',
              flexGrow: 1,
              width: '50%',
            }}>
            <CustomText body>{hotel.stars.toString()}</CustomText>
            <CustomText body>{hotel.userRating.toString()}</CustomText>
          </Flex>
          <CustomText body>{hotel.userRating.toString()}</CustomText>
        </Flex>
      </Flex>
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
