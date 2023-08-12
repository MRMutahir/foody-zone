import { abc } from "../component/arr";
console.log(abc);

function InnerItem() {
  return (
    <>
      {abc.map((item) => {
        let { imageUrl, name, description } = item;

        return (
          <div className="InnerItem">
            <div className="itemimage">
              <img className="image" src={imageUrl} alt="" />
            </div>
            <div className="propertie">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default InnerItem;
