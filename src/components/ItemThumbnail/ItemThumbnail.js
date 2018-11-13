import React from "react";

import "./ItemThumbnail.css";

const ItemThumbnail = props => (
  <div className="itemThumbnail">
    <img src={props.thumbPath} alt="thumbnail" />
  </div>
);

export default ItemThumbnail;
