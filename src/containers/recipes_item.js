import React, { Component } from 'react';
import _ from 'lodash';

class RecipeItem extends Component {

	renderIngredients() {
		const ingredients = _.split(this.props.recipe.ingredients, ',');

		return ingredients.map((ingredient) => {
			return (
				<li className="list-group-item" key={ ingredient }>{ ingredient }</li>
			);
		});
	}

	render() {
		const id = this.props.recipe.recipe.replace(/\s/g, '');

		return (
			<div className="panel panel-success">
				<div className="panel-heading">
					<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordion" href={`#${id}`}>{ this.props.recipe.recipe }</a>
					</h4>
				</div>
				<div id={`${id}`} className="panel-collapse collapse">
					<h4 className="text-center">Ingredients</h4>
					<div className="panel-body">
						<ul className="list-group">
							{ this.renderIngredients() }
						</ul>
						<button className="btn btn-danger">Delete</button>
						<button className="btn btn-warning">Edit</button>
					</div>
				</div>
			</div>
		);
	}
}

export default RecipeItem;