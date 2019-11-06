import React from "react";

const NumberButton = ({number, handleToUpdate}) => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props*/}
      <button onClick={() => handleToUpdate(number)}>{number}</button>
    </>
  );
};

export default NumberButton;