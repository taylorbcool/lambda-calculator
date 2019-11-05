import React, {useState} from "react";
import {operators} from "../../../data"
//import any components needed
import OperatorButton from "./OperatorButton"
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [ops, setOps] = useState(operators);
  return (
    <div>
      <div className = "ops-cont">
        {/* STEP 3 - Use .map() to iterate over your array data and return a button
        component matching the name on the provided file. Pass
        it any props needed by the child component*/}
        {
          ops.map((char, value) => (
            <OperatorButton button={char} value={value} />
          ))
        }
      </div> 
    </div>
  );
};

export default Operators