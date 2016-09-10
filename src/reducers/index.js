import { combineReducers } from 'redux';
import ReducerRecipes from './reducers_recipes';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  recipes: ReducerRecipes
});

export default rootReducer;
