require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/presets-env', '@babel/presets-react'],
});

require('./server');
