import {StyleSheet, Text} from 'react-native';
import React, {useCallback} from 'react';

type Props = {
  children: string;
  title?: boolean;
  body?: boolean;
  caption?: boolean;
  color?: string;
  bold?: boolean;
  lines?: number;
};

const CustomText: React.FC<Props> = ({
  children,
  title,
  body,
  caption,
  color = 'black',
  bold = false,
  lines = 1,
}) => {
  const setFontSize = useCallback(() => {
    if (title) {
      return 16;
    }
    if (body) {
      return 14;
    }
    if (caption) {
      return 12;
    }
  }, [body, caption, title]);

  return (
    <Text
      numberOfLines={lines}
      style={{
        fontSize: setFontSize(),
        fontWeight: bold ? 'bold' : 'normal',
        color: color,
      }}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
