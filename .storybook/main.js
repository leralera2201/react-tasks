const path = require("path");

module.exports = {
  stories: ["../src/**/*.story.mdx", "../src/**/*.story.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@components": path.resolve(__dirname, "../src/components"),
        },
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.less$/,
            loader: "less-loader",
          },
        ],
      },
    };
  },
};
