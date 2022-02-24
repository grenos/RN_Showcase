/* eslint-disable react-native/no-inline-styles */
import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  flex?: boolean;
  flexGrow?: number;
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
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
  pd?: number;
  styles?: StyleProp<ViewStyle>;
};

const Flex: React.FC<Props> = ({
  children,
  flex,
  flexGrow,
  wrap,
  direction,
  justify,
  align,
  alignChild,
  pd,
  styles = {},
}) => {
  return (
    <View
      style={[
        {
          flex: flex ? 1 : 0,
          flexGrow: flexGrow,
          flexWrap: wrap,
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          alignSelf: alignChild,
          padding: pd,
        },
        styles,
      ]}>
      {children}
    </View>
  );
};

export default Flex;
