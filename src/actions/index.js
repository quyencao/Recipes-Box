
export const ADD_RECIPE = "ADD_RECIPE";

export function addRecipe(props) {
	return {
		type: ADD_RECIPE,
		payload: props
	};
}