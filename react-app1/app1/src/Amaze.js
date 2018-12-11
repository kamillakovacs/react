import React, { Component } from 'react';


// this is a functional/UI component
const Amaze = ({amaze}) => {
  // const amazeballs = amaze.map(amaze => {
  //   if (amaze.age > 20) {
  //     return (
  //       <div className="amaze" key={ amaze.id }> 
  //         <div>Name: { amaze.name }</div>
  //         <div>Age: { amaze.age }</div>
  //         <div>Gender: { amaze.gender }</div>
  //       </div>
  //     )
  //   } else {
  //     return null;
  //   }
  // })

  const amazeballs = amaze.map(amaze => {
    return amaze.age > 20 ? (
      <div className="amaze" key={ amaze.id }> 
        <div>Name: { amaze.name }</div>
        <div>Age: { amaze.age }</div>
        <div>Gender: { amaze.gender }</div>
      </div>
    ) : null;
  })
  
  return (
    <div className='amazing-list'>
      { amazeballs }
    </div>
  );
};

export default Amaze;
