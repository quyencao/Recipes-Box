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
			<div className="panel-group" id="accordion">
				{this.renderList()}
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
