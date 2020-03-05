import React from "react";
import Ligne from "./Ligne";
import Adder from "./Adder";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  lines: [{valeur:'premier item', style:{textDecoration:'none'}} ] };    
  }

  handleClickAddButton = (value) => {    
    let lines = [...this.state.lines];
    lines.unshift({valeur:value, style:{textDecoration:'none'}});
    this.setState({ lines: lines });      

  }

  handleClickLine = (index) => {       
    let lines = [...this.state.lines];
    let currentStyle = lines[index].style;
    let newStyle = currentStyle.textDecoration==='none'?{textDecoration:'line-through'}:{textDecoration:'none'};
    lines[index].style = newStyle;     
    this.setState({lines:lines});      
  };

   handleLire = (lignes) => {
    let tempLines = [...lignes];
    let tab = tempLines.map((x, index) => (
      <Ligne
        key={index}
        value={x.valeur}
        onDelete={() => this.handleDeleteLine(index)}        
        onClickLine = {(event) => this.handleClickLine (index)}
        style= {x.style}
      />
    ));
    return tab;
  }

  handleDeleteLine = (index) => {    
    let lines = [...this.state.lines];
    lines.splice(index, 1);
    this.setState({ lines: lines });
  }

  render() {
    let lines = this.handleLire(this.state.lines);    
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
