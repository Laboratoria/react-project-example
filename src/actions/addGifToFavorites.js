import { ADD_GIF_TO_FAVORITES } from './actionTypes';

const addSingleGif = value => ({
  type: ADD_GIF_TO_FAVORITES,
  favorite: value
});

const addGifToFavorites = dispatch => dispatch(addSingleGif());

// eslint-disable-next-line import/prefer-default-export
export { addGifToFavorites };
