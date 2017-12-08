import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddLists extends Component {
    constructor(props){
        super(props)
        this.defaultState = {
            listName: '',
            items: []
        }

        this.state = Object.assign({}, this.defaultState)
    }

    static propTypes = {
        submitHandler: PropTypes.func.isRequired
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

       /*  this.setState((prevState) => {
            state = {}
            state[name] = value
            return state
        }) */
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState(Object.assign({}, this.defaultState))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name='listname' type='text' value={this.state.listName} onChange={this.handleChange} />
                <button type='submit'>Submit</button>
            </form>
        )
    }

}