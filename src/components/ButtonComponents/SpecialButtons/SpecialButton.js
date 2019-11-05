import React from "react";

const SpecialButton = (props) => {
  console.log(props.special);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button onClick = {()=>{
        props.setSelectedButton(props.special)
        // console.log(props.selectedButton);
        
      }

      }>{props.special}</button>

      
      }
       </>
      
  );
};
export default SpecialButton;