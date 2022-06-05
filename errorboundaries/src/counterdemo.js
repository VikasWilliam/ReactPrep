import React, { Component } from 'react';

class Counterdemo extends Component {
    constructor(){
        super();

        this.state={

            value:0
        }
    }

     onClickHandler=()=>{

        this.setState({
            value: this.state.value+1,
        })

    }
    
    render() {

        if(this.state.value==5){
            throw new Error("Counter error")
        }
        else{
        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.onClickHandler}>click me</button>
            </div>
        );
        }
    }
}

export default Counterdemo;