import React from "react";
import LOGO from "./LOGO.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({ list, newItem: "" });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  updatedInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div>
        <img className="logo" src={LOGO} width="25%" height="25%" />
        <h1 className="app-title">LCO ToDO App</h1>
        <div className="container">
          Add an Item...
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="write a Todo"
            required
            value={this.state.newItem}
            onChange={(e) => this.updatedInput(e.target.value)}
          />
          <button
            onClick={() => this.addItem(this.state.newItem)}
            className="add-btn"
            disabled={!this.state.newItem.length}
          >
            Add Todo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="idDone"
                      checked={item.isDone}
                      onChange={() => {}}
                    />
                    {item.value}
                    <button 
                      className="btn"
                      onChange={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" name="" id="" />
                Learning React
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
