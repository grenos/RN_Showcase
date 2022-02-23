module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@Storage': './src/Storage',
          '@Api': './src/Api',
          '@Screens': './src/Screens',
          '@Navigation': './src/Navigation',
          '@Utils': './src/Utils',
          '@Components': './src/Components',
          '@Assets': './src/Assets/',
        },
        extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
      },
    ],
  ],
};
