import React from "react";
import Button from '@material-ui/core/Button';

function Ligne (props) {  


      return (
        
      <div>    
        <br/>    
        <Button value="titi" style={props.style} onClick={props.onClickLine} variant="outlined" >

         {props.value}
        </Button>
        <Button color="primary" variant="outlined" size="small" onClick={props.onDelete}>
          X
        </Button>
      </div>
    );
  
}

export default Ligne;
