import { combineReducers } from 'redux';
import ReducerRecipes from './reducers_recipes';

const rootReducer = combineReducers({
  recipes: ReducerRecipes
});

export default rootReducer;
