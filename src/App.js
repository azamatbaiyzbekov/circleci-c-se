import React, {Component} from 'react';
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
    return (
      <div className="App">
       
      </div>
    );
  }
  
}

export default App;
