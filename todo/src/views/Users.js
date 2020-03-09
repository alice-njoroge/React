import React, {Component} from "react";
import axios from "axios";

class Users extends Component {
    state = {
        users: [],
        loading: false
    };

    componentDidMount() {
        this.setState({
            loading: true
        });
        axios.get(`http://127.0.0.1:3031/users/`)
            .then(res => {
                const users = res.data;
                this.setState({
                    users: users,
                    loading: false
                })
            }).catch(e => {
            console.log(e.response);
            this.setState({
                loading: false
            });
        })

    }

    render() {
        let loading = null;
        if (this.state.loading) {
            loading = <tr>
                <td>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-success" role="status"/>
                        <div className="spinner-grow text-primary" role="status"/>
                        <div className=" spinner-grow text-secondary" role=" status"/>
                    </div>
                </td>
            </tr>
        }

        const usersList = this.state.users.map(user => {
            return (
                <tr key={user.id}>
                    <th scope=" row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>@mdo</td>
                </tr>
            )
        });
        return (
            <div className=" users container">
                <div className=" row">
                    <div className=" col-md-8 offset-2">
                        <div className=" card">
                            <div className=" card-header">
                                List of users
                            </div>
                            <div className=" card-body">
                                <table className=" table">
                                    <thead className=" thead-dark">
                                    <tr>
                                        <th scope=" col">#</th>
                                        <th scope=" col">Name</th>
                                        <th scope=" col">Email</th>
                                        <th scope=" col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {loading}
                                    {usersList}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Users;