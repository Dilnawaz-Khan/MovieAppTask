module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@src': './src',
          '@commons': './src/commons/*',
          '@components': './src/components',
          '@configs': './src/configs/index.ts',
          '@contexts': './src/contexts/index.ts',
          '@screens': './src/screens/index.ts',
          '@utils': './src/utils/index.ts',
          '@assets': './src/assets/index.ts',
          '@constants': './src/constants/index.ts',
          '@routes': './src/routes/index.ts',
          '@layouts': './src/layouts/index.ts',
          '@hooks': './src/hooks/index.ts',
          '@api': './src/api/index.ts',
        },
      },
    ],
  ],
};
