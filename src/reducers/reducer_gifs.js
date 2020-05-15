import { LOAD_GIFS } from '../actions/actionTypes';
import { initialState } from '../store/initialState';

const reducerGifs = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GIFS:
      return { ...state, gifs: action.gifs };

    default:
      return state;
  }
};

// eslint-disable-next-line import/prefer-default-export
export { reducerGifs };
