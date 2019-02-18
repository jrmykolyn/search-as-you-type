module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: './main.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [],
};
