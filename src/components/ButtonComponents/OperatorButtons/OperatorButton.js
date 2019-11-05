import React from "react";

const OperatorButton = (props) => {
 
  const opValue = Object.values(props.oper);
  console.log(opValue[0]);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button>{opValue[0]}</button>
      }
    </>
  );
};
export default OperatorButton;
