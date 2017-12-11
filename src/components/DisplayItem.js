import React from 'react'
import AddItem from './AddItem'

export default function DisplayItem(props) {
    return (
        <ul>
            {props.items.map(props => {
                return <AddItem />
            })
        }
        </ul>

        
    )
}