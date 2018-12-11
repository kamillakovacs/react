import React, { Component } from 'react';

class Amaze extends Component {


  render() {
    const { amaze } = this.props;
    const amazingList = amaze.map(amaze => {
      return (
        <div className="amaze" key={ amaze.id }> 
          <div>Name: { amaze.name }</div>
          <div>Age: { amaze.age }</div>
          <div>Gender: { amaze.gender }</div>
        </div>
      )
    })
    return (
      <div className='amazing-list'>
        { amazingList }
      </div>
    );
  }
}

export default Amaze;