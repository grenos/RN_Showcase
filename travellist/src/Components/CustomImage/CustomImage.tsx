import {Image, ImageStyle, StyleProp} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {Images} from '@Assets/Images';
import {ApiSelectors, useAppSelector} from '@Storage/Redux';

type Props = {
  image: string;
  styles?: StyleProp<ImageStyle> | any;
};

const CustomImage: React.FC<Props> = ({image, styles = {}}) => {
  const [isLoadError, setIsLoadError] = useState(false);
  const isHotelsLoading = useAppSelector(ApiSelectors.getApiLoadingState);
  const onError = () => setIsLoadError(true);

  if (!image || isLoadError || isHotelsLoading) {
    return <Image source={Images.placeholder} style={styles} />;
  } else {
    return (
      <FastImage
        style={styles}
        source={{uri: image}}
        resizeMode={FastImage.resizeMode.cover}
        onError={onError}
      />
    );
  }
};

export default CustomImage;
