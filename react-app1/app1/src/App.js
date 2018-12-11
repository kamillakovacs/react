import React, { Component } from 'react';
import Amaze from './Amaze';

class App extends Component {
  state = {
    amaze : [
      { name: 'Kamilla', age: 36, gender: 'who knows sometimes', id: 1 },
      { name: 'Nora', age: 26, gender: 'female', id: 2 },
      { name: 'Sztiven', age: 16, gender: 'male', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Hello</p>
        <Amaze amaze={this.state.amaze} />
      </div>
    );
  }
}

export default App;
