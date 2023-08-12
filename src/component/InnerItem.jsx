import { abc } from "../component/arr";
console.log(abc);

function InnerItem() {
  return (
    <>
      {abc.map((item) => {
        // console.log(item);
        let { imageUrl, name, description ,type} = item;
        // console.log(description);
        return (
          <div className="InnerItem">
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
      })}
    </>
  );
}

export default InnerItem;
