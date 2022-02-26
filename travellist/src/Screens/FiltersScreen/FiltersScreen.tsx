import {Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {CustomIcon, CustomText, Flex} from '@Components';
import {
  FilterActions,
  FilterSelectors,
  useAppDispatch,
  useAppSelector,
} from '@Storage/Redux';
import {RootStackParamListApp} from '@Navigation/Stacks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = {} & NativeStackScreenProps<RootStackParamListApp, 'Filters'>;

const FiltersScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();
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
        // TODO -> Custom Button
        <TouchableOpacity onPress={() => onFilterOnStars(i)} key={i}>
          <CustomIcon
            name="star"
            size={28}
            color={numberOfStars > i ? '#d0b51b' : 'black'}
          />
        </TouchableOpacity>
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
    <Flex
      flexGrow={1}
      justify="flex-start"
      align="flex-start"
      styles={{padding: 20}}>
      <Flex align="flex-end" styles={{width: '100%', paddingBottom: 30}}>
        {/* // TODO -> Custom Button */}
        <TouchableOpacity onPress={onResetFilters}>
          <CustomText title>Reset Filters</CustomText>
        </TouchableOpacity>
      </Flex>

      <CustomText title color="gray">
        Filter hotels based on user rating
      </CustomText>

      <Flex
        direction="row"
        justify="space-evenly"
        styles={{width: '100%', paddingTop: 20}}>
        {_renderStars()}
      </Flex>

      <Flex
        alignChild="baseline"
        justify="flex-end"
        align="center"
        flexGrow={1}
        styles={{width: '100%'}}>
        {/* // TODO -> Custom Button */}
        <TouchableOpacity onPress={onFilterPress}>
          <Text>Press ME</Text>
        </TouchableOpacity>
      </Flex>
    </Flex>
  );
};

export default FiltersScreen;
