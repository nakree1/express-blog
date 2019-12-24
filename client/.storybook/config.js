import { configure, addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import store from '../src/config/store.config';
import theme from '../src/config/theme';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';


addDecorator(story => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StaticRouter location="/" >
        <CssBaseline />
        {story()}
      </StaticRouter>
    </ThemeProvider>
  </Provider>
));

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
