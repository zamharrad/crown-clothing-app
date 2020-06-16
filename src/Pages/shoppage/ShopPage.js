import React, { Component } from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../Components/Preview-collection/Collection-Preview";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
