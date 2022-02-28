import {FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import {ApiTypes} from '@Api';
import {Card} from '@Components';
import {s} from './Styles';

type Props = {
  data: ApiTypes.IHotel[];
};

const CardList: React.FC<Props> = ({data}) => {
  const _renderItem: ListRenderItem<ApiTypes.IHotel> = ({item}) => (
    <Card hotel={item} />
  );

  return (
    <FlatList
      testID="FLATLIST"
      contentContainerStyle={s.Container}
      contentInsetAdjustmentBehavior="automatic"
      data={data}
      renderItem={_renderItem}
    />
  );
};

export default CardList;
