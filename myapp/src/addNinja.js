import React, {Component} from 'react';


class AddNinja extends Component {
    state = {
        name: null,
        age:null
    };
     handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
         console.log(this.state);

    };
     handleSubmit = (e)=>{
         e.preventDefault();
     };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" onChange={this.handleChange} className="form-control" id="name"
                               placeholder="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="number" onChange={this.handleChange} className="form-control" id="age"
                               placeholder="age"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddNinja;