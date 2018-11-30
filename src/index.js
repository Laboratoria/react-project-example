import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Theme } from 'laboratoria-ui';

import App from './App';
import { language, messages } from './config/intl';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <MuiThemeProvider theme={Theme}>
      <App />
    </MuiThemeProvider>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
