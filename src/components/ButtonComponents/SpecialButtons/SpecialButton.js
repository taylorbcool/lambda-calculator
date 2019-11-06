import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <div className="btn-cont">
        <button>{props.spec}</button>
      </div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton