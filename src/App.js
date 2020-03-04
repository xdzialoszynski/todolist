import React from "react";
import Ligne from "./Ligne";
import Adder from "./Adder";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  lines: ["premier item"] };    
  }

  handleClickAddButton = (value) => {
    console.log("ajout d'un item dans la liste");
    let lines = [...this.state.lines];

    lines.unshift(value);
    this.setState({ lines: lines });
    console.log(lines);
  }

  handleClickItem = (event) => {   
    let deco = event.target.style.textDecoration;
    let newDeco = deco ==="line-through"?"none":"line-through";
    event.target.style.textDecoration = newDeco;
  };

  handleLineChange = (event, index) =>  {
    console.log(event.target.value );
    let lines = [...this.state.lines];    
    lines[index] = event.target.value;
    this.setState({ lines: lines });
  }

  handleLire = (lignes) => {
    let tempLines = [...lignes];
    let tab = tempLines.map((x, index) => (
      <Ligne
        key={index}
        value={x}
        onDelete={() => this.handleDeleteLine(index)}
        onLineChange={(event) => this.handleLineChange(event, index)}
        onClickLine = {(event) => this.handleClickItem (event)}
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
    //console.log(this.state.lines);
    return (
      <fieldset>
        <legend>todo list v2</legend>
        <Adder onClick={this.handleClickAddButton}/>            
        {lines}
      </fieldset>
    );
  }
}

export default App;
