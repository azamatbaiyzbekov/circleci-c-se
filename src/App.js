import React, {Component} from 'react';

import Informations from './components/Informations/Informations'
import Button from './components/Button/Button'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  };

  state = {
    text: [
      {name: 'CircleCI', founded: 2010}
    ],
    showText: false,
    showButton: true
  };
  
  toggleTextHandler = () => {
    const doesShow = this.state.showText;
    this.setState({ showText: !doesShow});
  };
  
  
  render() {
    console.log('[App.js] render');
    let text = null;

    if (this.state.showText) {
      text = <Informations 
      
        text={this.state.text}
      />
    };
    
    return (
      <div className="App">
      <button onClick = {() => {
        this.setState({ showButton: false})
      }}
      >
      Clear the screen
      </button>
      {this.state.showButton ? <Button 
        showText={this.state.showText}
        text={this.state.text}
        clicked={this.toggleTextHandler}
      /> : null}
       {text}
      </div>
    )
  };
  
};

export default App;
