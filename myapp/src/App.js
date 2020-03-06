import React, {Component} from 'react';
import New from './New';

class App extends Component {
  state = {
    ninjas: [
      {name: "Alice", age: "22", id:1},
      {name: "Ann", age: "24", id:2}
    ]
  };
    render() {
        return (
            <div className="App">
                <p>Welcome</p>
                <New ninjas={this.state.ninjas}/>
            </div>

        );
    }

}

export default App;
