import React from "react";

const OperatorButton = (props) => {
  // console.log(props)
  return (
    <>
      <div className="btn-cont">
        <button>{props.button.value}</button>
      </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;