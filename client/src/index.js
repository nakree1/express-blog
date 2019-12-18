import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import theme from './config/theme';
import store from './config/store.config';

import './scss/index.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
