import React, {Component} from 'react'

export default class FourthComponent extends Component{
    render(){
        return(
            <div>
                Fourth Component
            </div>
        );
    }
} 

// This doesn't work anymore, just one default export per module is allowed in newer version of React
/*
export default class FifthComponent extends Component{
    render(){
        return(
            <div>
                Fifth Component
            </div>
        );
    }
}
*/