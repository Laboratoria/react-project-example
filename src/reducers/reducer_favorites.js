import { ADD_GIF_TO_FAVORITES } from '../actions/actionTypes';
import { initialState } from '../store/initialState';

const reducerFavorites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GIF_TO_FAVORITES:
      return { ...state, favorites: action.favorites };

    default:
      return state;
  }
};

// eslint-disable-next-line import/prefer-default-export
export { reducerFavorites };
