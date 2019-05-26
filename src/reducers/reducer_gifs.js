import { LOAD_GIFS, ADD_GIF_TO_FAVORITES } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_GIFS:
      return action.page.gifs;

    case ADD_GIF_TO_FAVORITES:
      return action.page.favorite;

    default:
      return state;
  }
};
