import React, { Component } from 'react'
import AddLists from './AddLists'
import AddItem from './AddItem'



export default class DisplayItems extends Component {
    constructor(props){
        super(props)

        this.state = {
            listname: this.props,
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
                counter: prevState.counter +1,
            }
            return {
                items: prevState.items.concat(text),
                counter: prevState.counter + 1
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
        
        return(
            <div>
                
                <AddItem onSubmit={this.addItem} />
                <ul>
                    {this.state.items}
                </ul>

                      
            </div>
        )
    }
}
