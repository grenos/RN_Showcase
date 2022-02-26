import {StyleSheet, View} from 'react-native';
import React from 'react';

const ActiveFilterDot = () => {
  return <View style={s.container} />;
};

export default ActiveFilterDot;

const s = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'orange',
  },
});
