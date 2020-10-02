import React from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      { name: "Qasim", age: 23 },
      { name: "Mohsin", age: 26 },
      { name: "John", age: 29 },
    ],
    doesShow: false,
  };

  toggleHandler = () => {
    this.setState({
      doesShow: !this.state.doesShow,
    });
  };

  nameChangedHandler = (event, index) => {
    const newPersons = [...this.state.persons];
    const newObj = { name: event.target.value, age: 23 };

    newPersons[index] = newObj;

    this.setState({
      persons: newPersons,
    });
  };

  render() {
    const persons = this.state.persons;
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.toggleHandler} style={style}>
          Switch Name
        </button>
        <ul className={this.state.doesShow ? "list" : "hidden"}>
          {persons &&
            persons.map((person, index) => (
              <Person
                key={index}
                name={person.name}
                age={person.age}
                change={(event) => this.nameChangedHandler(event, index)}
              />
            ))}
        </ul>
      </div>
    );
  }
}
export default App;
