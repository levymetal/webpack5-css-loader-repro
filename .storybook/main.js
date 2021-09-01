module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  typescript: {
    reactDocgen: 'none',
  },
};
