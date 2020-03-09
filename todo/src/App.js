import React, {Component} from 'react';
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./views/Login";
import Users from "./views/Users";
import Todos from "./views/Todo";

class App extends Component {
    render() {
        return (
           <Router>
               <Header/>
               <Switch>
                   <Route exact path='/login' component={Login}/>
                   <Route  path='/users' component={Users}/>
                   <Route  path='/todos' component={Todos}/>

               </Switch>

           </Router>
        )
    }

}

export default App;