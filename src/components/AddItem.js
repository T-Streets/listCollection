import React, { Component } from 'react'

export default class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }

    }

    handleChange = e => {
        this.setState({value: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
       this.props.onSubmit(this.state.value)
       this.setState({value: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.value} onChange={this.handleChange} />
                <button type='submit'>Add Item</button>
            </form>
        )
    }
}