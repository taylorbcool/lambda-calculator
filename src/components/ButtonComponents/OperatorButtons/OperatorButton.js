import React from "react";
import { setState } from "expect/build/jestMatchersObject";

const OperatorButton = (props) => {
  // console.log(props)
  return (
    <>
      <div className="btn-cont">
        <button>{props.char.char}</button>
      </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;