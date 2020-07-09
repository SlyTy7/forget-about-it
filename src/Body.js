import React from "react";
import List from "./List.js";

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        "Buy Groceries",
        "Do Laundry",
        "Pay Cell Phone Bill",
        "Send Email",
        "Call Clients"
      ],
      doneItems: []
    };
  }

  render() {
    return (
      <div className="App-body">
        <List items={this.state.todoItems} />
        <List items={this.state.doneItems} />
      </div>
    );
  }
}

export default Body;
