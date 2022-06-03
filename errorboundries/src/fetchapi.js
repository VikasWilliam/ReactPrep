import React, { Component, useEffect ,Fragment} from 'react';
//import "./fetchapi.css";

var url="https://apidemonodejs.herokuapp.com/skills";
class Apicall extends Component{
    constructor(){
        super();
        
        this.state={
          employees:[],
          displayValue:"none"
        
        }  

    }
   onClickHandler=(e)=>{
     if(this.state.displayValue=="none")
     {
     this.setState({
       displayValue:"unset"
     })
    }else{
      this.setState({
        displayValue:"none"
      })

    }
   }

    render(){
        return(
            <>
                <h3>Api call in ComponentDidMount</h3>
                <button onClick={this.onClickHandler}>Click me</button>
              <div style={{display:this.state.displayValue}}>
                {this.state.employees.map(item=>(
                  <>
                  <div style={{backgroundColor:"yellow"}}>{item.name}</div>
                  <div style={{backgroundColor:"light blue"}}>{item.Description}</div>
                  </>
                ))}
                </div>
                
            </>
        )
    }

    componentDidMount(){
        
            fetch(url).then(res=>res.json())
            .then(
              result=>{
                this.setState({employees:result});
                console.log(this.state.employees)
              }
            )
            .catch(error => {
              throw(error);
          })

          }
    }

    export default Apicall;
