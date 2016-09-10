
import { ADD_RECIPE } from '../actions/index';

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
	console.log(action);
	switch(action.type) {
		case ADD_RECIPE:
			return [ action.payload, ...state ];
		default:
			return state;	
	}
}