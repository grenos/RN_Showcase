import {
  useColorScheme,
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
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
import {Card, CustomIcon, CustomText, Flex} from '@Components';
import {useDisplayHotels} from './Hooks/useDisplayHotels';
import {useFetchHotels} from './Hooks/useFetchHotels';

type Props = {} & NativeStackScreenProps<RootStackParamListApp, 'Home'>;
type InputText = NativeSyntheticEvent<TextInputFocusEventData>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch();
  useFetchHotels();
  const [isSearching, setIsSearching] = useState(false);
  const hotels = useDisplayHotels(isSearching);
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search Hotels',
        onChangeText: onChangeText,
        onBlur: onBLur,
        onCancelButtonPress: onCancelButtonPress,
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
          <CustomIcon name="sliders" color="#000" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, onBLur, onCancelButtonPress, onChangeText]);

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
      data={hotels}
      renderItem={_renderItem}
    />
  );
};

const s = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
  },
});

export default HomeScreen;
