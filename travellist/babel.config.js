module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@Storage': './src/Storage',
          '@Screens': './src/Screens',
          '@Navigation': './src/Navigation',
        },
        extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
      },
    ],
  ],
};
