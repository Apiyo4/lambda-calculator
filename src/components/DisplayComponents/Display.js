import React from "react";

const Display = (props) => {
  console.log(props.selectedButton);
  return <div className="display">{/* Display any props data here */

  }
  {props.selectedButton}
  </div>;
};
export default Display;