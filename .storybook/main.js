webpackFinal: (config) => {
  return {
    resolve: {
      modules: [path.resolve('./src')],
      fallback: {
        timers: false,
        tty: false,
        os: false,
        http: false,
        https: false,
        zlib: false,
        util: false,
      },
    },
  };
};

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  resolve: {
    fallback: { util: false },
  },
};
