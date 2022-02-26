import {
  useColorScheme,
  FlatList,
  ListRenderItem,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Platform,
} from 'react-native';
import React, {useLayoutEffect, useCallback, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamListApp} from '@Navigation/Stacks';
import {
  useAppDispatch,
  useAppSelector,
  ApiSelectors,
  FilterActions,
} from '@Storage/Redux';
import {ApiTypes} from '@Api';
import {Card, CustomText, FiltersNavIcon, Flex} from '@Components';
import {useDisplayHotels} from './Hooks/useDisplayHotels';
import {useFetchHotels} from './Hooks/useFetchHotels';
import {IHotel} from '@Api/types';

type Props = {} & NativeStackScreenProps<RootStackParamListApp, 'Home'>;
type InputText = NativeSyntheticEvent<TextInputFocusEventData>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch();
  useFetchHotels();

  // TODO -> DO Search localy on either array (filtered or entire hotel)
  const [isSearching, setIsSearching] = useState(false);

  const [hotels, isFilterActive] = useDisplayHotels();
  const isApiError = useAppSelector(ApiSelectors.getApiErrorState);

  const onChangeText = useCallback(
    (e: InputText) => {
      e.nativeEvent.text.length > 0
        ? setIsSearching(true)
        : setIsSearching(false);
      dispatch(FilterActions.setSearchedHotels({text: e.nativeEvent.text}));
    },
    [dispatch],
  );

  const onBLur = useCallback(
    () => dispatch(FilterActions.resetFilterState()),
    [dispatch],
  );

  const onCancelButtonPress = useCallback(
    () => dispatch(FilterActions.resetFilterState()),
    [dispatch],
  );

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
      data={hotels as IHotel[]}
      renderItem={_renderItem}
    />
  );
};

const s = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    paddingBottom: Platform.OS === 'android' ? 30 : 0,
  },
});

export default HomeScreen;
