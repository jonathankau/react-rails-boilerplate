import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      samples: []
    };
  }

  componentDidMount() {
    fetch('/api/samples')
      .then(response => response.json())
      .then(data => this.setState({ samples: data }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <table>
          {this.state.samples.map(s => (
            <tr>
              <td>{s.id}</td>
              <td>{s.text}</td>
              <td>{s.created_at}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
