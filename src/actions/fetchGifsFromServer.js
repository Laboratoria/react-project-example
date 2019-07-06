import { LOAD_GIFS } from './actionTypes';
import Api from '../api';

const fillGifsList = value => ({
  type: LOAD_GIFS,
  gifs: value
});

const fetchGifsFromServer = async dispatch => {
  const res = await Api.get();
  const json = await res.json();
  dispatch(fillGifsList(json.data));
};

// eslint-disable-next-line import/prefer-default-export
export { fetchGifsFromServer };
