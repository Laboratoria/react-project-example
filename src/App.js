import React from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';

const App = () => (
  <Typography variant="h1" align="center">
    <FormattedMessage id="hello.world" />
  </Typography>
);

export default App;
