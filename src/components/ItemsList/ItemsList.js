import React from "react";

import Item from "../Item";

import "./ItemsList.css";

const ItemsList = ({ items }) => (
  <div className="container">
    <h1>Items List</h1>
    <div className="itemsList">
      {items.map((items, i) => (
        <Item items={items} key={i} />
      ))}
    </div>
  </div>
);

export default ItemsList;
