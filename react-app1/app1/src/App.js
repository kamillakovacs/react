import React, { Component } from 'react';
import Amaze from './Amaze';
import AddAmaze from './AddAmaze'

class App extends Component {
  state = {
    amaze : [
      { name: 'Kamilla', age: 36, gender: 'who knows sometimes', id: 1 },
      { name: 'Nora', age: 26, gender: 'female', id: 2 },
      { name: 'Sztiven', age: 16, gender: 'male', id: 3 }
    ]
  }
  addAmaze = (amazing) => {
    amazing.id = Math.random();
    let amaze = [...this.state.amaze, amazing] // creates a copy of the amaze array in state, adn adds the new amazing element
    this.setState({
      amaze: amaze
    })
  }

  deleteAmazingThings = (id) => {
    let amaze = this.state.amaze.filter(amazing => {
      return amazing.id !== id
    });
    this.setState({
      amaze: amaze
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Hello</p>
        <Amaze deleteAmazingThings={this.deleteAmazingThings} amaze={this.state.amaze} />
        <AddAmaze addAmaze={this.addAmaze}/>
      </div>
    );
  }
}

export default App;
