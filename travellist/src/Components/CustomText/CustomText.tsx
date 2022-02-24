/* eslint-disable react-native/no-inline-styles */
import {StyleProp, Text, ViewStyle} from 'react-native';
import React, {useCallback} from 'react';

type Props = {
  children: string;
  title?: boolean;
  body?: boolean;
  smallBody?: boolean;
  caption?: boolean;
  color?: string;
  bold?: boolean;
  lines?: number;
  styles?: StyleProp<ViewStyle>;
};

const CustomText: React.FC<Props> = ({
  children,
  title,
  body,
  smallBody,
  caption,
  color = 'black',
  bold = false,
  lines = 1,
  styles = {},
}) => {
  const setFontSize = useCallback(() => {
    if (title) {
      return 16;
    }
    if (body) {
      return 14;
    }
    if (smallBody) {
      return 12;
    }
    if (caption) {
      return 10;
    }
  }, [body, caption, title, smallBody]);

  return (
    <Text
      numberOfLines={lines}
      style={[
        {
          fontSize: setFontSize(),
          fontWeight: bold ? 'bold' : 'normal',
          color: color,
          fontStyle: caption ? 'italic' : 'normal',
        },
        styles,
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;
