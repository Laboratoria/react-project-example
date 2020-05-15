import { ADD_GIF_TO_FAVORITES } from './actionTypes';

const addGif = value => ({
  type: ADD_GIF_TO_FAVORITES,
  favorite: value
});

const sendToStore = selectedGif => dispatch => {
  dispatch(addGif(selectedGif));
};

// eslint-disable-next-line import/prefer-default-export
export { sendToStore as addGifToFavorites };
