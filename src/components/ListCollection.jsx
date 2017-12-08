import React, { Component } from 'react'
import AddLists from './AddLists'

export default class ListCollection extends Component {
   constructor(props){
        super(props)
        state = {
            items: [],
            counter: 0
        }
    
    

        addList = (list) => {
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(list),
                    counter: prevState.counter + 1
                }
            })
        }


        deleteList = (id) => {
            this.setState((prevState) => {
                return {
                    items: prevState.items.filter((item) => {
                        return item.id !== id
                    }),
                }
            })
        }
    }



    render() {
        <AddLists submitHandler={this.addList} />
    }


}
    







    

