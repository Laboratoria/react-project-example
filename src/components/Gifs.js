import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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

const Gifs = ({ classes, data }) => (
  <div className={classes.root}>
    <GridList cellHeight={160} className={classes.gridList} cols={3}>
      {data.length > 0 &&
        data.map(gif => (
          <GridListTile key={gif.title} cols={1}>
            <img src={gif.images.downsized_medium.url} alt={gif.title} />
          </GridListTile>
        ))}
    </GridList>
  </div>
);

export default withStyles(styles)(Gifs);
