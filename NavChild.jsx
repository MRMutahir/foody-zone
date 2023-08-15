import React, { useEffect, useState } from "react";
import {abc} from './component/arr'
import { Route, Routes } from "react-router-dom";


// function handleInputChange (eve) {
//   let input_value = eve.target.value
//   // input_value
//   console.log(input_value);
// }
let type
  // console.log(abc,"abc arr");
  let filter = abc.filter(ele=>{
      type =  ele.type
      // console.log(ele.type);
  })
// console.log(type ,'filter type');
function NavChild() {
  const [count, setCount] = useState("");
  // console.log(count); 
  function handleInputChange (eve) {
  let input_value = eve.target.value  
  // // input_value
  // console.log(input_value);
  setCount(input_value)
}
  return (

    <div className="NavChild">
      <div className="name">Foody Zone</div>
      <div className="input-div">
        <input type="text" placeholder="Search Food...." name="" id="input" onChange={handleInputChange }/>
      </div>
    </div>
 
  );
}

export default NavChild;
