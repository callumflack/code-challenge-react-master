import React, { Component } from "react";

import List from "../Item";

import "./ItemsList.css";

class ItemsList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="container">
        <h1>Items List</h1>
        <List items={items} />
      </div>
    );
  }
}

export default ItemsList;
