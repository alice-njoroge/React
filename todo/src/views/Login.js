import React, {Component} from "react";
class Login extends Component{
    state={
        email: null,
        password:null
    };
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    };
    handleSubmit =  (e)=>{
        e.preventDefault();
        console.log(this.state);
    };

    render() {
       return(
           <div className="login container ">
               <div className="row">
                   <div className="col-md-6 offset-3">
                       <div className="card">
                           <div className="card-header">
                               Login
                           </div>
                           <div className="card-body">
                               <form onSubmit={this.handleSubmit}>
                                   <div className="form-group">
                                       <label htmlFor="email">Email address</label>
                                       <input type="email" className="form-control" id="email"
                                              aria-describedby="emailHelp" onChange={this.handleChange} placeholder="Enter email"/>
                                   </div>
                                   <div className="form-group">
                                       <label htmlFor="password">Password</label>
                                       <input type="password" onChange={this.handleChange} className="form-control" id="password"
                                              placeholder="Password"/>
                                   </div>
                                   <button type="submit" className="btn btn-primary">Submit</button>
                               </form>
                           </div>
                       </div>

                   </div>
               </div>
           </div>
       )
    }
}
export default Login;