import {
  FlatList,
  ListRenderItem,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import React, {useLayoutEffect, useCallback, useState} from 'react';
import {useAppSelector, ApiSelectors} from '@Storage/Redux';
import {ApiTypes} from '@Api';
import {Card, CustomText, FiltersNavIcon, Flex} from '@Components';
import {useDisplayHotels, useFetchHotels} from './Hooks';
import {searchHotels} from './Utils';
import {s} from './Styles';
import {useNavigation} from '@react-navigation/native';

type InputText = NativeSyntheticEvent<TextInputFocusEventData>;

const HomeScreen = () => {
  useFetchHotels();
  const navigation = useNavigation();
  const [isSearching, setIsSearching] = useState(false);
  const [searchedHotels, setSearchedHotels] = useState<ApiTypes.IHotel[]>([]);
  const [hotels, isFilterActive] = useDisplayHotels();
  const isApiError = useAppSelector(ApiSelectors.getApiErrorState);

  const onChangeText = useCallback(
    (e: InputText) => {
      e.nativeEvent.text.length > 0
        ? setIsSearching(true)
        : setIsSearching(false);

      // use to strip optioanl boolean type
      if (typeof hotels === 'boolean') {
        return;
      }
      let foundHotels = searchHotels(hotels, e.nativeEvent.text);
      setSearchedHotels(foundHotels);
    },
    [hotels],
  );

  const onBLur = useCallback(() => setIsSearching(false), []);
  const onCancelButtonPress = useCallback(() => setIsSearching(false), []);

  const onNavigation = useCallback(() => {
    navigation.navigate('Filters');
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search Hotels',
        onChangeText: onChangeText,
        onBlur: onBLur,
        onCancelButtonPress: onCancelButtonPress,
      },
      headerRight: () => (
        <FiltersNavIcon
          isFilterActive={isFilterActive as boolean}
          action={onNavigation}
        />
      ),
    });
  }, [
    navigation,
    onBLur,
    onCancelButtonPress,
    onChangeText,
    isFilterActive,
    onNavigation,
  ]);

  const _renderItem: ListRenderItem<ApiTypes.IHotel> = ({item}) => (
    <Card hotel={item} />
  );

  if (isApiError) {
    return (
      <Flex flexGrow={1} justify="center" align="center">
        <CustomText title>Wops! Something went wrong here</CustomText>
      </Flex>
    );
  }

  return (
    <FlatList
      contentContainerStyle={s.Container}
      contentInsetAdjustmentBehavior="automatic"
      data={isSearching ? searchedHotels : (hotels as ApiTypes.IHotel[])}
      renderItem={_renderItem}
    />
  );
};

export default HomeScreen;
