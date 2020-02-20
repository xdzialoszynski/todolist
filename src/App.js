import React from "react";
import Ligne from "./Ligne";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  lines: [""] };    
  }

  handleLineChange = (value, index) =>  {
    let lines = [...this.state.lines];  
    lines[index] = value;
    this.setState({ lines: lines });
  }

  handleLire = (lignes) => {
    let tempLines = [...lignes];
    let tab = tempLines.map((x, index) => (
      <Ligne
        index={index}
        value={x}
        onDelete={this.handleDeleteLine}
        onLineChange={this.handleLineChange}
      />
    ));
    return tab;
  }

  handleDeleteLine = (index) => {
    console.log(index);
    let lines = [...this.state.lines];
    lines.splice(index, 1);
    this.setState({ lines: lines });
  }

  handleAjouterLigne = () => {
    let lines = [...this.state.lines];
    lines.unshift("");
    this.setState({ lines: lines });
  }

  render() {
    let lines = this.handleLire(this.state.lines);
    console.log(this.state.lines);
    return (
      <fieldset>
        <legend>todo list</legend>
        <input
          type="button"
          value="ajouter une ligne"
          onClick={this.handleAjouterLigne}
        />
        {lines}
      </fieldset>
    );
  }
}

export default App;
