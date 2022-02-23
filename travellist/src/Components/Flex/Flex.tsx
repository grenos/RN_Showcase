/* eslint-disable react-native/no-inline-styles */
import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignChild?:
    | 'auto'
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline';
  styles?: StyleProp<ViewStyle>;
};

const Flex: React.FC<Props> = ({
  children,
  direction = 'column',
  justify = 'center',
  align = 'center',
  alignChild = 'center',
  styles = {},
}) => {
  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          alignSelf: alignChild,
        },
        styles,
      ]}>
      {children}
    </View>
  );
};

export default Flex;
