import LOAD_GIFS from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_GIFS:
      return action.gifs;

    default:
      return state;
  }
};
