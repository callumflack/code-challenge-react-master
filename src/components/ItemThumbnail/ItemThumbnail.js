import React from "react";

import "./ItemThumbnail.css";

const ItemThumbnail = ({ files }) => (
  <div className="itemThumbnail">
    <img src={files.thumbPath} alt="thumbnail" />
  </div>
);

export default ItemThumbnail;
