import React from "react";

const OperatorButton = (props) => {
 
  const opValue = Object.values(props.oper);
  console.log(opValue[0]);
  // const displayValue = opValue[1];
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button onClick ={() =>{
  
        props.setSelectedButton(opValue[0])
        // console.log(props.selectedButton);
      }} 
    >{opValue[0]}</button>
      }
    </>
  );
};
export default OperatorButton;
