import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import fechGifsFrontServer from './actions';

import Gifs from './components/Gifs';

const App = ({ dispatch, gifs }) => (
  <React.Fragment>
    <Typography variant="h1" align="center" gutterBottom>
      <FormattedMessage id="hello.world" />
    </Typography>
    <Button
      variant="contained"
      color="primary"
      onClick={() => dispatch(fechGifsFrontServer)}
    >
      <FormattedMessage id="load.gifs" />
    </Button>
    <Gifs data={gifs} />
  </React.Fragment>
);

const mapStateToProps = state => ({
  gifs: state.gifs
});

export default connect(mapStateToProps)(App);
