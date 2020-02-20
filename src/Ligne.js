import React from "react";
class Ligne extends React.Component {
  constructor(props) {
    super(props);    
  }

  handleChange = (event) => {
    console.log(
      "inside handlechange:value:" +
        event.target.value +
        "index:" +
        this.props.index
    );
    this.props.onLineChange(event.target.value, this.props.index);
  }

  handleClick = (event) => {
    this.props.onDelete(this.props.index); 
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
        />
        <input type="button" value="x" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Ligne;
