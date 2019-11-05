import React from "react";
import Numbers from '../ButtonComponents/NumberButtons/NumberButton';
import Operators from '../ButtonComponents/OperatorButtons/OperatorButton';
import Specials from '../ButtonComponents/SpecialButtons/SpecialButton';



const Display = (props) => {
  console.log(props.selectedButton);
  return <div className="display">{/* Display any props data here */

  }
  {props.selectedButton}
  </div>;
};
export default Display;