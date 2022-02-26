import React, {useCallback, useEffect, useState} from 'react';
import {CustomButton, CustomText, Flex} from '@Components';
import {
  FilterActions,
  FilterSelectors,
  useAppDispatch,
  useAppSelector,
} from '@Storage/Redux';
import {useNavigation} from '@react-navigation/native';
import {s} from './Styles';

const FiltersScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [numberOfStars, setsetNumberOfStars] = useState(0);
  const maxNumberOfStars = useAppSelector(FilterSelectors.getMaxNumberOfStars);
  const getNumberOfStars = useAppSelector(FilterSelectors.getNumberOfStars);

  useEffect(() => {
    setsetNumberOfStars(getNumberOfStars);
  }, [getNumberOfStars]);

  const onFilterOnStars = useCallback((index: number) => {
    setsetNumberOfStars(index + 1);
  }, []);

  const _renderStars = useCallback(() => {
    let stars: JSX.Element[] = [];
    for (let i = 0; i < maxNumberOfStars; i++) {
      let star = (
        <CustomButton
          key={i}
          isIcon
          icon="star"
          iconColor={numberOfStars > i ? '#d0b51b' : 'black'}
          size={[28]}
          action={() => onFilterOnStars(i)}
        />
      );
      stars.push(star);
    }
    return stars;
  }, [maxNumberOfStars, numberOfStars, onFilterOnStars]);

  const onFilterPress = () => {
    numberOfStars > 0 &&
      dispatch(FilterActions.setHotelsWithStarFilter({stars: numberOfStars}));
    numberOfStars > 0 && dispatch(FilterActions.setFiltersIsActive(true));
    numberOfStars > 0 &&
      dispatch(FilterActions.setNumberOfStars(numberOfStars));
    navigation.goBack();
  };

  const onResetFilters = () => {
    dispatch(FilterActions.resetFilterState());
    numberOfStars > 0 && setsetNumberOfStars(0);
  };

  return (
    <Flex flexGrow={1} justify="flex-start" align="flex-start" styles={s.pd20}>
      <Flex align="flex-end" styles={[s.fullWidth, s.pdBottom30]}>
        <CustomButton
          size={[120, 40]}
          title="Reset Filters"
          action={onResetFilters}
        />
      </Flex>

      <CustomText title color="gray">
        Filter hotels based on user rating
      </CustomText>

      <Flex
        direction="row"
        justify="space-evenly"
        styles={[s.fullWidth, s.pdTop20]}>
        {_renderStars()}
      </Flex>

      <Flex
        alignChild="baseline"
        justify="flex-end"
        align="center"
        flexGrow={1}
        styles={s.fullWidth}>
        <CustomButton
          size={[240, 52]}
          title="Search Hotels"
          styles={s.searchButton}
          action={onFilterPress}
        />
      </Flex>
    </Flex>
  );
};

export default FiltersScreen;
