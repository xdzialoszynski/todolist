import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Ligne (props) {  

  const handleChange = (event) => {
    console.log(
      "inside handlechange:value:" +
        event.target.value +
        "index:" +
        props.index
    );
    props.onLineChange(event.target.value, props.index);
  }
  
    return (
      <div>        
        <TextField onChange={props.onLineChange}>
          {props.value}
        </TextField>
        <Button color="primary" variant="outlined" size="small" onClick={props.onDelete}>
          X
        </Button>
      </div>
    );
  
}

export default Ligne;
