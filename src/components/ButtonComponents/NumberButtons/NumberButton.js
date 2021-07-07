import React from "react";

const NumberButton = (props) => {
  // console.log(props.num)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button onClick ={() =>{
        props.setSelectedButton(props.num)
        // console.log(props.selectedButton);
      }} >{props.num}</button>
      
      }
    </>
  );
};
export default NumberButton;
