import React ,{useState} from 'react';
import ReactDom from 'react-dom';
import Propdis from './passprop';

const App=(props)=>{

    const [name,setName]= useState('Vikas');


    return(
        <div>
            <h1>App Component</h1>
            <h1>{name}</h1>
            <Propdis nam={name} />
            <button onClick={()=>setName("William")}>click me</button>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'));

var country= "INDIA";

function updateCountry(countryName){
    //log you country
    console.log(country);
    //create a variable
    var country=countryName;
    //log country name
    console.log(country);

}
updateCountry("US");