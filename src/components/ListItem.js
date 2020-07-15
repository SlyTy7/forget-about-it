import React from "react";

class ListItem extends React.Component {
  render() {
    return (
      <li onClick={this.props.handleClick}>{this.props.value}</li>
    )
  }
}

export default ListItem;
