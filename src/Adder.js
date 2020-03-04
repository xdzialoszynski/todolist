import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const Adder = (props) => {

const [inputVal, setInputVal] = useState();

const handleChange = (event) => {
  setInputVal(event.target.value);
;}

const handleClick = () => {
  props.onClick(inputVal);
  setInputVal("");
;
}
  return(
<div>
        <TextField name="lineName" value={inputVal} onChange={handleChange} />                  
        <Button color="primary" variant="outlined" size="small" onClick={handleClick}>
          Ajouter à la liste
        </Button>
</div>
  );
};

export default Adder;