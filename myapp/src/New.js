import React, { Component } from 'react';

class New extends Component {
    render() {
        const { name, age } = this.props;

        return (
            <div><p>Name : {name}</p>
                <p> Age : {age}</p>
            </div>


        )
    }
}

export default New;