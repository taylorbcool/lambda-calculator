import React from "react";

const NumberButton = (props) => {

  return (
    <>
      <div className="btn-cont">
        <button>{props.num}</button>
      </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;