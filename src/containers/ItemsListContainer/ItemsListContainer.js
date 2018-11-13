import React from "react";
// import { compose } from "react-apollo";

import ItemsList from "../../components/ItemsList";
// import itemsQuery from "../../graphql/itemsQuery";

import items from "../../items";

class ItemsListContainer extends React.Component {
  render() {
    // const { items } = this.props;
    // let items = [];

    return <ItemsList items={items} />;
  }
}

// export default compose(itemsQuery)(ItemsListContainer);
export default ItemsListContainer;
