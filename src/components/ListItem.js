import React from "react";
import "../styles/ListItem.css";

class ListItem extends React.Component {

  getClassNames = () => {
    if(this.props.completed){
      return "list-item done-item"
    } else {
      return "list-item todo-item"
    }
  }

  render() {
    return (
      <li className={this.getClassNames()} onClick={this.props.handleClick}>{this.props.value}</li>
    )
  }
}

export default ListItem;
