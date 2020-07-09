import React from "react";
import ListItem from "./ListItem.js";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => {
          return <ListItem key={index} item={item} />;
        })}
      </ul>
    );
  }
}

export default List;
