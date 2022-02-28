import {Platform, StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    paddingBottom: Platform.OS === 'android' ? 30 : 0,
  },
});
