import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

type Props = {
  name: string;
  size?: number;
  color?: string;
  styles?: StyleProp<ViewStyle>;
};

const CustomIcon: React.FC<Props> = ({
  name,
  size = 24,
  color = '#d0b51b',
  styles = {},
}) => {
  return <Icon name={name} size={size} color={color} style={styles} />;
};

export default CustomIcon;
