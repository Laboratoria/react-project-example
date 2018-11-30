import { combineReducers } from 'redux';
import gifs from './reducer_gifs';

const rootReducer = combineReducers({
  gifs
});

export default rootReducer;
