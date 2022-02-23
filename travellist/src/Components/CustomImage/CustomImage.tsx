import {StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {Images} from '@Assets/Images';
import {ApiSelectors, useAppSelector} from '@Storage/Redux';

type Props = {
  image: string;
};

const CustomImage: React.FC<Props> = ({image}) => {
  const [isLoadError, setIsLoadError] = useState(false);
  const isHotelsLoading = useAppSelector(ApiSelectors.getApiLoadingState);
  const onError = () => setIsLoadError(true);

  if (!image || isLoadError || isHotelsLoading) {
    return <Image source={Images.placeholder} style={s.Container} />;
  } else {
    return (
      <FastImage
        style={s.Container}
        source={{uri: image}}
        resizeMode={FastImage.resizeMode.cover}
        onError={onError}
      />
    );
  }
};

export default CustomImage;

const s = StyleSheet.create({
  Container: {
    width: 100,
    height: 120,
    borderBottomLeftRadius: 14,
    borderTopLeftRadius: 14,
  },
});
