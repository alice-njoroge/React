import React, {Component} from 'react';
import New from './New';
import AddNinja from "./addNinja";

class App extends Component {
  state = {
    ninjas: [
      {name: "Alice", age: "22", id:1},
      {name: "Ann", age: "24", id:2},
      {name: "James", age: "27", id:3}
    ]
  };
  addNinja = (ninja)=> {
      ninja.id = Math.random();
     let ninjas = [...this.state.ninjas, ninja];
      this.setState({
          ninjas : ninjas
      })
  };
  deleteNinja = (id)=>{
     let ninjas = this.state.ninjas.filter(ninja =>{
         return ninja.id !== id;
     });
     this.setState({
         ninjas:ninjas
     });
};
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

                <main role="main" className="container">

                    <div className="card">
                        <div className="card-header">
                            welcome
                        </div>
                        <div className="card-body">
                            <div className="App">
                                <AddNinja addNinja={this.addNinja}  />
                                <New ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
                            </div>
                        </div>
                    </div>

                </main>
            </div>

        );
    }

}

export default App;
