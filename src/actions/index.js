import LOAD_GIFS from './actionTypes';
import Api from '../api';

const fillGifsList = value => ({
  type: LOAD_GIFS,
  gifs: value
});

const fechGifsFrontServer = async dispatch => {
  const res = await Api.get();
  const json = await res.json();
  dispatch(fillGifsList(json.data));
};

export default fechGifsFrontServer;
