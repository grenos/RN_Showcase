import React from 'react';
import {ApiTypes} from '@Api';
import {Flex, CustomImage, CustomText, CustomIcon} from '@Components';
import {currencyForamttingOptions} from '@Utils/General';
import numbro from 'numbro';
import {s} from './Styles';

type Props = {
  hotel: ApiTypes.IHotel;
};

const Card: React.FC<Props> = ({hotel}) => {
  return (
    <Flex direction="row" styles={s.cardContainer}>
      <CustomImage image={hotel.gallery[0]} styles={s.imageContainer} />

      <Flex flex flexGrow={1} pd={5}>
        <CustomText body bold lines={1} styles={s.infoContainer}>
          {hotel.name}
        </CustomText>

        <Flex direction="row" justify="space-between" styles={s.infoContainer}>
          <Flex flex wrap="wrap" flexGrow={0.7}>
            <Flex direction="row" align="center" styles={s.pdBottom5}>
              <CustomIcon name="map-pin" size={16} styles={s.pdEnd5} />
              <CustomText body>{hotel.location.city}</CustomText>
            </Flex>

            <Flex direction="row" align="center" styles={s.pdBottom5}>
              <CustomIcon name="home" size={16} styles={s.pdEnd5} />
              <CustomText caption color="grey">
                {hotel.location.address}
              </CustomText>
            </Flex>
          </Flex>

          <CustomText smallBody bold>
            {numbro(hotel.price).formatCurrency(currencyForamttingOptions)}
          </CustomText>
        </Flex>

        <Flex
          direction="row"
          flexGrow={1}
          justify="flex-end"
          align="flex-end"
          styles={s.pdHorizontal10}>
          <Flex direction="row" styles={s.pdEnd10}>
            <CustomIcon name="star" size={16} styles={s.pdEnd5} />
            <CustomText body>{hotel.stars.toString()}</CustomText>
          </Flex>

          <CustomIcon name="users" size={16} styles={s.pdEnd5} />
          <CustomText body>{hotel.userRating.toString()}</CustomText>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
