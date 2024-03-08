//rafce (or) rsc -> Functional components

import React from 'react';

const FunctionComp = () => {

  const Change = () =>{
    alert("Hi")
  };

  return (
    <div>
      <h1>---Using Functional Component---</h1>
      <button type='button' onClick={Change}>onChange</button>
    </div>
  );
};

export default FunctionComp;