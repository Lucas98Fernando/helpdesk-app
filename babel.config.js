module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
          '@/*': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@layouts': './src/layouts',
          '@screens': './src/screens',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@context': './src/context',
        },
      },
    ],
  ],
};
