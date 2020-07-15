import React from "react";
import ListItem from "./ListItem.js";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => {
          return (
            <ListItem
              completed={item.completed}
              key={index}
              value={item.title}
              handleClick={() => this.props.handleItemClick(item)}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
