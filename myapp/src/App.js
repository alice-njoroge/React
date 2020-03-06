import React, { Component } from 'react';
import New from './New';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Welcome</p>
        <New name="Alice" age="22" />
      </div>

    );
  }

}

export default App;
