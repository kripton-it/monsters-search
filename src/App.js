import "./App.css";
import React, { Component } from "react";

import { CardList } from "./components/card-list/CardList";

const monsters = [];
const url = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters
    };
  }

  componentDidMount() {
    fetch(url)
      .then(resp => resp.json())
      .then(monsters => this.setState({ monsters }));
  }

  render() {
    return (
      <CardList>
        {this.state.monsters.map(monster => (
          <p>{monster.name}</p>
        ))}
      </CardList>
    );
  }
}

export default App;

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
