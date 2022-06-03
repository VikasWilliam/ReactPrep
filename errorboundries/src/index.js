import React from 'react'
import ReactDom from 'react-dom';
import './index.css'
import Apicall from './fetchapi';;

const App=()=>{
    return(
        <div>
            <h3>Welcome to error boundries</h3>
            
            <Apicall/>
            
        </div>
    )
}

ReactDom.render(<App/>,document.getElementById('root'));