import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { addGifToFavorites } from '../actions/addGifToFavorites';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  subheader: {
    width: '100%'
  }
});
/* eslint-disable */
const Gifs = ({ classes, data, favoriteGif }) => (
  <div className={classes.root}>
    <GridList cellHeight={160} className={classes.gridList} cols={3}>
      {data.length > 0 &&
        data.map(gif => (
          <Tooltip title="favoritar!" placement="center">
            <GridListTile key={gif.title} cols={1}>
              <img
                src={gif.images.downsized_medium.url}
                alt={gif.title}
                onClick={() => favoriteGif}
              />
            </GridListTile>
          </Tooltip>
        ))}
    </GridList>
  </div>
);
/* eslint-enable */
const mapStateToProps = state => ({
  data: state.gifs,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  favoriteGif: gif => dispatch(addGifToFavorites(gif))
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Gifs);
