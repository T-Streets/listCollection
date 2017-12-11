import React, { Component } from 'react'
import AddLists from './AddLists'
import AddItem from './AddItem'
import DisplayItem from './DisplayItem'

export default class DisplayLists extends Component {
    constructor(props){
        super(props)

        this.state = {
            listname: this.props.listname,
            items: [],
            counter: 0,
        }
    }

    addItem = text => {
        this.setState(prevState => {
            const newItem = {
                id: prevState.counter,
                text: text,
                complete: false,

            }
        })
    }

    deleteItem = id => {
        this.setState(prevState => {
            items: prevState.filter(items => {
                return items.id !== id
            })
        })
    }
    
    render() {
        console.log(this.state.listname)
        return(
            <div>
                <AddItem onSubmit={this.addItem} />
                <button onClick={this.deleteItem}>Delete</button>
                    <ul>
                       {this.state.items.map(items => {
                           return <DisplayItem listname={this.listname} />
                       })} 
                    </ul>
            </div>
        )
    }
}
