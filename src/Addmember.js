import React, { Component } from 'react'

class AddMember extends Component {
    state = {
        name: null,
        age: null,
        level: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMember(this.state);

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange} />

                    <label htmlFor="name">Age: </label>
                    <input type="text" id="age" onChange={this.handleChange} />

                    <label htmlFor="name">Level: </label>
                    <input type="text" id="level" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddMember