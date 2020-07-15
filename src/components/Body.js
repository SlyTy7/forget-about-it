import React from "react";
import List from "./List.js";

const createItemId = () => {
  let date = Date.now();
  let random = Math.floor(Math.random() * 1000);
  let id = `item-id-${random * date}`;

  return id;
};

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        {
          title: "Buy Groceries",
          completed: false,
          id: createItemId(),
        },
        {
          title: "Do Laundry",
          completed: false,
          id: createItemId(),
        },
        {
          title: "Pay Cell Phone Bill",
          completed: false,
          id: createItemId(),
        },
        {
          title: "Send Email",
          completed: false,
          id: createItemId(),
        },
      ],
      doneItems: [
        {
          title: "Call Clients",
          completed: true,
          id: createItemId(),
        },
      ],
    };
  }

  handleItemClick = (item) => {
    let index;
    let todoItems = this.state.todoItems;
    let doneItems = this.state.doneItems;

    // checks if item is completed and changes list
    if (item.completed) {
      index = doneItems.indexOf(item);
      todoItems.push(item);
      doneItems.splice(index, 1);
    } else {
      index = todoItems.indexOf(item);
      todoItems.splice(index, 1);
      doneItems.push(item);
    }

    // toggles compelted state
    item.completed = !item.completed;

    this.setState({
      todoItems: todoItems,
      doneItems: doneItems,
    });
  };

  render() {
    return (
      <div className="App-body">
        <div className="lists-container">
          <List
            items={this.state.todoItems}
            handleItemClick={(item) => this.handleItemClick(item)}
          />
          <List
            items={this.state.doneItems}
            handleItemClick={(item) => this.handleItemClick(item)}
          />
        </div>
      </div>
    );
  }
}

export default Body;
