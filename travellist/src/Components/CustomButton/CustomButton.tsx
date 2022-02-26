import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {CustomIcon, CustomText} from '@Components';

type Props = {
  size: number[];
  isIcon?: boolean;
  title?: string;
  titleColor?: string;
  icon?: string;
  iconColor?: string;
  styles?: StyleProp<ViewStyle>;
  action: () => void;
};

const CustomButton: React.FC<Props> = ({
  size,
  isIcon,
  title,
  titleColor = '#000',
  icon,
  iconColor,
  styles,
  action,
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={[s.container, {width: size[0], height: size[1]}, styles]}>
      {isIcon ? (
        <CustomIcon name={icon!} color={iconColor} size={size[0]} />
      ) : (
        <CustomText title color={titleColor}>
          {title!}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const s = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
