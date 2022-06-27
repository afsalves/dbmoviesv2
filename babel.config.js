module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            src: './src',
            '@apis': './src/apis',
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@configs': './src/configs',
            '@modules': './src/modules',
            '@styles': './src/styles',
            '@utils': './src/utils',
            '@global': './src/global',
          },
        },
      ],
    ],
  };
};
