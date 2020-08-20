import "./Collection-Preview.scss";

import React from "react";
import CollectionItem from "../Collecton-Item/CollectionItem";

const CollectionPreview = ({ id, title, items }) => (
  <div className="collection-preview">
    <h2 className="title">{title.toUpperCase()}</h2>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherProps}) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
        
    </div>
  </div>
);

export default CollectionPreview;
