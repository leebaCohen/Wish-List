import React from 'react';
import ListItem from './ListItem'

export default function List({wishlist}){
    return(
    wishlist.map((item) => (
                <ListItem key={item.id} item={item.value} id={item.id}/>
            ))
    )
}
