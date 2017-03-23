var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      BudgetApp: 'app/components/BudgetApp.jsx',
      API: 'app/api/budgetTrackerAPI.jsx',
      Nav: 'app/components/Nav.jsx',
      Summary: 'app/components/Summary.jsx',
      Expenses: 'app/components/Expenses.jsx',
      Income: 'app/components/Income.jsx',
      ListItem: 'app/components/ListItem.jsx',
      AddItem: 'app/components/AddItem.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
