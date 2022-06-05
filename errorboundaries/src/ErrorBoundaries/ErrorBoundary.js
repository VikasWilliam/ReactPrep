import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(){
        super();

        this.state={

            hasError: false,
        }
    }

    static getDerivedStateFromError(error){
        console.log(error);
        return {hasError:true};
    }
    render() {
        if(this.state.hasError){
        return (
            <div>
                Display Error or fallback UIa
            </div>
        );
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;