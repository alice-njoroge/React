import React, {Component} from "react";
import axios from "axios";

class Login extends Component {
    state = {
        form: {
            email: null,
            password: null
        },
        error: null
    };
    handleChange = (e) => {
        const form = {...this.state.form};
        form[e.target.id] = e.target.value;
        this.setState({
            form: form
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error:null
        });
        axios.post(`http://127.0.0.1:3031/users/login`, this.state.form)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                return this.props.history.push("/users");
            })
            .catch(e => {
                this.setState({
                    error:e.response.data.message
                })
            });
    };

    render() {
        let errorBox = '';
        if (this.state.error) {
            errorBox = <div className="alert alert-danger" role="alert">
                {this.state.error}
            </div>
        }
        return (
            <div className="login container ">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="card">
                            <div className="card-header">
                                Login
                            </div>
                            <div className="card-body">
                                {errorBox}
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email"
                                               aria-describedby="emailHelp" onChange={this.handleChange}
                                               placeholder="Enter email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" onChange={this.handleChange} className="form-control"
                                               id="password"
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