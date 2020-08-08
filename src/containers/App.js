import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("http://starlord.hackerearth.com/recipe")
      .then((response) => response.json())
      .then((recipe) => {
        this.setState({ recipes: recipe });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { recipes, searchfield } = this.state;
    const filteredRecipes = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !recipes.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">HackedRecipe</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList recipes={filteredRecipes} />
      </div>
    );
  }
}

export default App;
