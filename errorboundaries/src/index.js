import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.css'
import Child from './child';
import Counterdemo from './counterdemo';
import ErrorBoundary from './ErrorBoundaries/ErrorBoundary';

class App extends Component {
    constructor(){
        super();

        this.state={
            title:"Error Boundry"
        }
    }
    render() {
        return (
            <div>
                <h1>Welcome to Error Boundaries in React</h1>
                <Child titlep={this.state.title}/>
                <ErrorBoundary>
                <Counterdemo/>
                </ErrorBoundary>
            </div>
        );
    }
}

ReactDom.render(<App/>,document.getElementById("root"));

