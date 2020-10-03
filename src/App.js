import React from "react";
import "./App.css";
import styled from "styled-components";

import Person from "./Person/Person";

const ShowButton = styled.button`
  background-color: ${(props) => (props.show ? "tomato" : "teal")};
  font: inherit;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: gold;
  }
`;

const Div = styled.div`
  text-align: center;
`;

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

    return (
      <Div>
        <h1>Hi I'm a React App</h1>
        <p>This is really working</p>
        <ShowButton show={this.state.doesShow} onClick={this.toggleHandler}>
          {this.state.doesShow ? "Hide Persons" : "Show Persons"}
        </ShowButton>
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
      </Div>
    );
  }
}
export default App;
