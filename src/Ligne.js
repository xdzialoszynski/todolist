import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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


  render() {
    return (
      <div>        
        <TextField onChange={this.props.onLineChange}>
          {this.props.value}
        </TextField>
        <Button color="primary" variant="outlined" size="small" onClick={this.props.onDelete}>
          X
        </Button>
      </div>
    );
  }
}

export default Ligne;
