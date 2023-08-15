import React from 'react';
import { abc } from './arr';

function Breakfast() {
  // Filter the array based on the condition
  const filteredItems = abc.filter(item => item.type === 'breakfast');
  // console.log(filteredItems);

  return (
    <>
    <div className='MainInner'>  {filteredItems.map((item) => {
         // console.log(item.type);
        let { imageUrl, name, description, type } = item;
        return (
          <div key={item.id} className="InnerItem">
            <div className="itemimage">
              <img className="image" src={imageUrl} alt="" />
            </div>
            <div className="propertie">
              <h1 className="headingname">{name}</h1>
              <p className="description">{description}</p>
              <button className="btn-type">{type}</button>
            </div>
          </div>
        );
      })}</div>
    </>
  );
}

export default Breakfast;

