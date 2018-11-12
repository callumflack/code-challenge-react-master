import React from "react";

import ItemThumbnail from "../ItemThumbnail";

import "./Item.css";

const Item = ({ title, description, files }) => (
  <div className="item">
    <ItemThumbnail files={files} />
    <div className="item-details">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Item;
