import "./App.css";
import React, { Component } from "react";

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
      <div className="App">
        {this.state.monsters.map(({ name }) => (
          <h1 key={name}>{name}</h1>
        ))}
      </div>
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
