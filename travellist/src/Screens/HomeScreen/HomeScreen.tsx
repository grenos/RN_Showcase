import {
  Text,
  useColorScheme,
  FlatList,
  ListRenderItem,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useLayoutEffect, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamListApp} from '@Navigation/Stacks';
import {
  useAppDispatch,
  useAppSelector,
  ApiSelectors,
  ApiActions,
} from '@Storage/Redux';
import {ApiTypes} from '@Api';
import {Card} from '@Components';

type Props = {} & NativeStackScreenProps<RootStackParamListApp, 'Home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch();
  const hotels = useAppSelector(ApiSelectors.getHotels);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    dispatch(ApiActions.fetchHotels());
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        // search bar options
      },
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('Filters')}
          title="Filters"
        />
      ),
    });
  }, [navigation]);

  const _renderItem: ListRenderItem<ApiTypes.IHotel> = ({item}) => (
    <Card hotel={item} />
  );

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
