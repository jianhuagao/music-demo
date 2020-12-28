const CracoLessPlugin = require("craco-less");
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "@comp": resolve("src/components"),
      "@page": resolve("src/pages")
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#C20C0C' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}