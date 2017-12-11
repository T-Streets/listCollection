import React, { Component } from 'react'
import AddLists from './AddLists'
import DisplayLists from './DisplayLists'

export default class ListCollection extends Component {
   constructor() {
       super()
        this.state = {
            items: [],
            counter: 0
            }
    }
    
    
    
    addList = list => {
        this.setState(prevState => {
                const newItems = {
                    id: prevState.counter,
                    items: list,
                    counter: prevState.counter + 1,
                }
                return {
                    items: prevState.items.concat(list),
                    counter: prevState.counter + 1,
                }    
            }
        )
    }
    


    deleteList = id => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item) => {
                    return item.id !== id
                }),
            }
        })
    }
    



    render() {
        return(
        <div>
            <AddLists submitHandler={this.addList} />
            <button onClick={this.deleteList}>Delete List</button>
                <ul>
                    {
                        this.state.items.map(items => {
                            return <DisplayLists key={items.counter} id={items.counter} deleteList={this.deleteList} />
                        })
                    }
                </ul>
        </div>

        
        )
    }


}
    







    

