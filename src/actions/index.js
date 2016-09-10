
export const ADD_RECIPE = "ADD_RECIPE";

export const DELETE_RECIPE = "DELETE_RECIPE";

export function addRecipe(props) {
	return {
		type: ADD_RECIPE,
		payload: props
	};
}

export function deleteRecipe(recipe) {
	return {
		type: DELETE_RECIPE,
		payload: recipe
	}
}