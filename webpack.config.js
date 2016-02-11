module.exports = {
  cache: true,
  resolve: { extensions: ['', '.jsx', '.js'] },
  context: __dirname,
  entry: { app: ['webpack/hot/dev-server', './js/app.jsx'] },
    output: {
      path: './js',
      filename: 'bundle.js',
      publicPath: '/js/'
  },
  devServer: {
    host : '0.0.0.0', port : 8080, inline : true
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel',
        query: { presets: ['es2015', 'stage-0', 'react'] }
      } 
    ]
  } 
};