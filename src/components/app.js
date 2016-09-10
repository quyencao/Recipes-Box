import React, { Component } from 'react';
import RecipesList from '../containers/recipes_list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      	<RecipesList />
      </div>
    );
  }
}
