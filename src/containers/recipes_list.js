import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import RecipesItem from './recipes_item';

class RecipesList extends Component {

	renderList() {
		return this.props.recipes.map((recipe) => {
			return <RecipesItem recipe={ recipe } key={ recipe.recipe } />
		});
	}

	render() {
		return (
			<div>
				<div className="panel-group" id="accordion">
					{this.renderList()}
				</div>
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
				      <div className="modal-body">
				        <form>
				          <div className="form-group">
				            <label className="control-label">Recipe</label>
				            <input type="text" className="form-control" placeholder="Recipe Name"/>
				          </div>
				          <div className="form-group">
				            <label className="control-label">Ingredients</label>
				            <textarea className="form-control" rows="5" placeholder="Enter Ingredients Separated By Commas"></textarea>
				          </div>
				        </form>
				      </div>
				      <div className="modal-footer">
				      	<button type="button" className="btn btn-primary">Add Recipe</button>
				        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		recipes: state.recipes
	}
}

export default connect(mapStateToProps)(RecipesList);
