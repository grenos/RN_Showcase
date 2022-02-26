import {TouchableOpacity, useColorScheme, View} from 'react-native';
import React, {memo} from 'react';
import {CustomIcon, ActiveFilterDot} from '@Components';

type Props = {
  isFilterActive: boolean;
  action: () => void;
};

const FiltersNavIcon: React.FC<Props> = memo(({isFilterActive, action}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TouchableOpacity onPress={action}>
      <View>
        <CustomIcon name="sliders" color={isDarkMode ? '#fff' : '#000'} />
        {isFilterActive && <ActiveFilterDot />}
      </View>
    </TouchableOpacity>
  );
});

export default FiltersNavIcon;
