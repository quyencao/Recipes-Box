import React, { Component } from 'react';
import RecipesList from '../containers/recipes_list';
import RecipesAdd from '../containers/recipes_add';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      	<RecipesList />
      	<RecipesAdd />
      </div>
    );
  }
}
