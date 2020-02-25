import React from "react";
import Ligne from "./Ligne";
import Button from '@material-ui/core/Button';
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  lines: [""] };    
  }

  handleLineChange = (event, index) =>  {
    //console.log(event.target.value);
    let lines = [...this.state.lines];    
    lines[index] = event.target.value;
    this.setState({ lines: lines });
  }

  handleLire = (lignes) => {
    let tempLines = [...lignes];
    let tab = tempLines.map((x, index) => (
      <Ligne        
        value={x}
        onDelete={() => this.handleDeleteLine(index)}
        onLineChange={(event) => this.handleLineChange(event, index)}
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
        <legend>todo list</legend>
        <Button variant="outlined" color="primary" onClick={this.handleAjouterLigne}>
          ajouter une ligne
        </Button>       
        {lines}
      </fieldset>
    );
  }
}

export default App;
