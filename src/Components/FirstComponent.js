import React, {Component} from 'react';

// Class Component
export default class FirstComponent extends Component{
  render(){
    return (
      <div>
        First Component
      </div>
    );
  }
}

// This doesn't work anymore, just one default export per module is allowed in newer version of React
/*
export default class SecondComponent extends Component{
    render(){
        return(
            <div>
                Second Component
            </div>
        );
    }
}
*/


