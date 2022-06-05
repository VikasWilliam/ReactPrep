import React from 'react';


const Child=(props)=>{

    if(props.titlep!="Error Boundry"){
        throw new Error("there is an error");
    }
    return(
        <div>
            <h3>This is the child Component</h3>
            <h4>Here we see {props.titlep} </h4>
           
        </div>
    )
}

export default Child;