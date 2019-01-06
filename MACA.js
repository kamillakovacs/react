const React = require('react');

class States extends React.Component {
  constructor() {
    super();
    this.state = { united: false };
  }
  
  unite() {
    this.setState({ 
      united: true 
    })
  }
  
  render() {
    let bespoke;
    const united = this.state.united
    if (united) {
    bespoke = <h1>Code for everyone</h1>;
  } else {
    bespoke = <h1>Make America code again</h1>;
  }
    return ( 
      <div className="status">
      {bespoke}
      </div>
    )
  } 
}