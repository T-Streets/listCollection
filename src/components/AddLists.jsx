import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DisplayItems from './DisplayItems'

export default class AddLists extends Component {
    constructor(props){
        super(props)
        this.defaultState = {
            listname: this.props.listname,
            items: []
        }

        this.state = Object.assign({}, this.defaultState)
    }

    static propTypes = {
        submitHandler: PropTypes.func.isRequired
    }

    handleChange = e => {
        let listname = e.target.listname
        let value = e.target.value

        this.setState((prevState) => {
           const state = {}
            state[listname] = value
            return state
        })
        
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState(Object.assign({}, this.defaultState))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input listname='listname' type='text' value={this.state.listName} onChange={this.handleChange} />
                    <button type='submit'>Add List</button>
                </form>
                
            </div>
        )
    }

}