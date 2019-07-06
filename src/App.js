import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { fetchGifsFromServer } from './actions/fetchGifsFromServer';
import Gifs from './components/Gifs';
import logo from './images/logo.svg';
import { addGifToFavorites } from './actions/addGifToFavorites';

const styles = theme => ({
  root: {
    flexFlow: 1,
    textAlign: 'center'
  },
  logo: {
    padding: 15,
    borderBottom: 'solid 1px',
    borderColor: theme.palette.primary.dark
  },
  button: {
    margin: '20px 0',
    padding: '0 0 20px 0'
  }
});

const App = ({ classes, fetchGifs, gifs, favoriteGif }) => (
  <Grid container justify="center" className={classes.root}>
    <Grid item xs={12} className={classes.logo}>
      <img src={logo} alt="Laboratoria" />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h1" align="center" gutterBottom>
        <FormattedMessage id="hello.world" />
      </Typography>
    </Grid>

    <Grid item xs={12} className={classes.button}>
      <Button variant="contained" color="primary" onClick={fetchGifs}>
        <FormattedMessage id="load.gifs" />
      </Button>
    </Grid>

    <Grid item xs={12} className={classes.button}>
      <Button variant="outlined" color="primary">
        <FormattedMessage id="fave.gifs" />
      </Button>
    </Grid>

    <Grid item xs={12}>
      <Gifs data={gifs} favoriteGif={favoriteGif} />
    </Grid>
  </Grid>
);

const mapStateToProps = state => ({
  gifs: state.gifs,
  favorite: state.favorite
});

const mapDispatchToProps = dispatch => ({
  fetchGifs: () => dispatch(fetchGifsFromServer),
  favoriteGif: gif => dispatch(addGifToFavorites(gif))
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
