module.exports = {
  webpack: function (webpackConfig, env) {
    webpackConfig.optimization = {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          // custom cache group to force all components files
          // in /components/common into their own chunk
          components: {
            name: "Components",
            test: /[\\/]components[\\/]/,
            enforce: true,
          },
          modules: {
            name: "Modules",
            test: /[\\/]modules[\\/]/,
            enforce: true,
          },
          // default defined by webpack
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
        },
      },
    };
    return webpackConfig;
  },
};
