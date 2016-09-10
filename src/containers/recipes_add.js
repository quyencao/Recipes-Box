import React, { Component } from 'react';
import { addRecipe } from '../actions/index';
import { reduxForm } from 'redux-form';

class RecipesAdd extends Component {

	onFormSubmit(props) {
		this.props.addRecipe(props);
		// Reset Value Form
		this.props.fields.recipe.value = '';
		this.props.fields.ingredients.value = '';
		$('#addRecipe').modal('hide');
	}

	render() {
		const { fields: { recipe, ingredients }, handleSubmit } = this.props;

		return (
			<div>
				<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#addRecipe">
					Add Recipe
				</button>
				<div className="modal fade" id="addRecipe" role="dialog" aria-labelledby="myModalLabel">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 className="modal-title" id="myModalLabel">Add a Recipe</h4>
				      </div>
				      <form onSubmit={ handleSubmit(this.onFormSubmit.bind(this)) }>
					      <div className="modal-body">
					          <div className="form-group">
					            <label className="control-label">Recipe</label>
					            <input type="text" className="form-control" placeholder="Recipe Name" {...recipe}/>
					          	<div className="text-help text-danger">{ recipe.touched ? recipe.error : '' }</div>
					          </div>
					          <div className="form-group">
					            <label className="control-label">Ingredients</label>
					            <textarea className="form-control" rows="5" placeholder="Enter Ingredients Separated By Commas" { ...ingredients } ></textarea>
					          	<div className="text-help text-danger">{ ingredients.touched ? ingredients.error : '' }</div>
					          </div>
					      </div>
					      <div className="modal-footer">
					      	<button type="submit" className="btn btn-primary">Add Recipe</button>
					        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					      </div>
				       </form>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
} 

function validate(values) {
	const errors = {};

	if(!values.recipe) {
		errors.recipe = "Recipe field is needed.";
	}

	if(!values.ingredients) {
		errors.ingredients = "Ingredients field is needed.";
	}

	return errors;
}

export default reduxForm({
	form: 'addnewrecipe',
	fields: ['recipe', 'ingredients'],
	validate
}, null, { addRecipe })(RecipesAdd);