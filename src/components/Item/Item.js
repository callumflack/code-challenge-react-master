import React from "react";

// import ItemThumbnail from "../ItemThumbnail";

import "./Item.css";

// const Item = ({ title, description, files }) => (
//   <div className="item">
//     <ItemThumbnail files={files} />
//     <div className="item-details">
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   </div>
// );

const List = props => {
  const items = props.items.map((item, index) => {
    return (
      <div className="item" key={index}>
        <div className="item-thumbnail">
          <img src={item.files[5]} alt="avatar" />
        </div>
        <div className="item-details">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    );
  });

  return <div className="List">{items}</div>;
};

export default List;
