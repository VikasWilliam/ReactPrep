import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends Component{
    constructor(){
        super();

        console.log("Constructor and Super call");
        this.state={
            counter: '',
        }
    }

      UNSAFE_componentWillMount(){
        console.log("222=>ComponentWillMount");
    }

    render(){
        return(
            <div className="center">
                <button className="btn btn-primary">Click me</button>
            </div>
        )
    }

    componentDidMount(){
        console.log("3333=>ComponentDidMount calling API")
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));