import {
  Text,
  useColorScheme,
  FlatList,
  ListRenderItem,
  Button,
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
import {IHotel} from '@Api/types';

type Props = {} & NativeStackScreenProps<RootStackParamListApp, 'Home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch();
  const hotels = useAppSelector(ApiSelectors.getHotels);
  const isHotelsLoading = useAppSelector(ApiSelectors.getApiLoadingState);

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

  const _renderItem: ListRenderItem<IHotel> = ({item}) => (
    <Text style={{paddingBottom: 50}} key={item.id}>
      {item.name}
    </Text>
  );

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      data={hotels}
      renderItem={_renderItem}
    />
  );
};

export default HomeScreen;
