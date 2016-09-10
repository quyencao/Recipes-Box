import _ from 'lodash';
import { ADD_RECIPE, DELETE_RECIPE } from '../actions/index';

const DEFAULT_STATE = [
	{
		recipe: "Pumpkin Pie",
		ingredients: "Pumpkin Puree,Sweetened Condensed Milk,Eggs,Pumpkin Pie Spice" 
	},
	{
		recipe: "Spaghetti",
		ingredients: "Noodles,Tomato Sauce,(Optional) Meatballs"
	}, 
	{
		recipe: "Onion Pie",
		ingredients: "Onion,Pie Crust,Sounds Yummy right?"
	}
];

export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case ADD_RECIPE:
			return [ action.payload, ...state ];
		case DELETE_RECIPE:
			const nextState = [ ...state ];
			_.remove(nextState, (recipe) => {
				return recipe === action.payload;
			});
			return nextState;
		default:
			return state;	
	}
}