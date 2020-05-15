import { combineReducers } from 'redux';
import { reducerGifs } from './reducer_gifs';
import { reducerFavorites } from './reducer_favorites';

const rootReducer = combineReducers({
  reducerGifs,
  reducerFavorites
});

export default rootReducer;
