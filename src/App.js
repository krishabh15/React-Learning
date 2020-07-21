import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent'
import SecondComponent from './Components/SecondComponent'
import ThirdComponent from './Components/ThirdComponent'
import FourthComponent from './Components/FourthComponents'

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <FirstComponent/>
          <SecondComponent/>
          <ThirdComponent/>
          <FourthComponent/>
        </header>
      </div>
    );
  }
}


export default App;
