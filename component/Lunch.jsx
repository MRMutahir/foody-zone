import React from 'react';
import { abc } from '../component/arr';
// console.log(abc);


function Lunch() {
    // Filter the array based on the condition
    //   const filteredItems = abc.filter(item => item.type === 'lunch');
    //   console.log(filteredItems);
    let lunch = abc.find(ele => ele.type === "lunch")
    let { imageUrl, name, description, type } = lunch;

    return (
        <>
    
          <div key={lunch.id} className="InnerItem">
            <div className="itemimage">
              <img className="image" src={imageUrl} alt="" />
            </div>
            <div className="propertie">
              <h1 className="headingname">{name}</h1>
              <p className="description">{description}</p>
              <button className="btn-type">{type}</button>
            </div>
          </div>
    </>
  );
}

export default Lunch;
