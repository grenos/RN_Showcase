import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    height: 130,
    marginTop: 30,
    marginHorizontal: 20,
    borderBottomLeftRadius: 14,
    borderTopLeftRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  imageContainer: {
    width: 100,
    height: 130,
    borderBottomLeftRadius: 14,
    borderTopLeftRadius: 14,
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  // the following styles would normally be in a centralized theme or a storybook
  pdBottom5: {
    paddingBottom: 5,
  },
  pdHorizontal10: {
    paddingHorizontal: 10,
  },
  pdEnd10: {
    paddingEnd: 10,
  },
  pdEnd5: {
    paddingEnd: 5,
  },
});
