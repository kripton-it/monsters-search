import "./App.css";
import React, { Component } from "react";

import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";

const initialMonsters = [];
const url = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: initialMonsters,
      searchField: ""
    };
  }

  componentDidMount() {
    fetch(url)
      .then(resp => resp.json())
      .then(monsters => this.setState({ monsters }));
  }

  handleChange = ({ target }) => {
    this.setState({ searchField: target.value });
  };

  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          // searchField={searchField}
          handleChange={this.handleChange}
          placeholder="Search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
