const React = require('react');

class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  
// Your state
  }
// Your event handlers 
  addOne(e) {
    e.preventDefault();
    let newCounter = this.state.counter += 1;
    this.setState({
      counter: newCounter
    })
  }

  subtractOne(e) {
    e.preventDefault();
    let newCounter = this.state.counter -= 1;
    this.setState({
      counter: newCounter
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
          <button type="button" onClick={this.subtractOne}>
            Decrement
          </button>
          <button type="button" onClick={this.addOne}>
            Increment
          </button>
      </div>
    )
  }
}