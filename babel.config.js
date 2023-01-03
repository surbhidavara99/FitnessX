module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // ... some other plugins
    [
      'module-resolver',
      {
        root: './',
        alias: {
          '@screens': './src/screens',
          '@images': './src/images',
          '@styles': './src/styles',
          '@components': './src/components',
        },
      },
    ],
  ],
};
