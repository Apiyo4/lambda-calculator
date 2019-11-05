import React, {useState} from "react";

//import any components needed

//Import your array data to from the provided data file
import data from '../../../data' 
// console.log(specials);

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(data.specials);
  console.log(specialState);
  console.log(setSpecialState);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Specials;
