import React from "react";
import {useDispatch} from 'react-redux'
import "./styles/ItemCard.css"

const ItemCard =({name, price, id, description, image_url})=>{
    const dispatch = useDispatch();
    const addItem=(id)=>{
        console.log("add item from card",id)
        dispatch({type:"ADD",payload:{id}})
    }
    
    return(<div className="ItemCard">
        <h3>{name}</h3>
            <div>Price: {price}</div>
            <img className="ItemCard-image" src={image_url}/>
            <div>{description}</div>
            <button onClick={()=>addItem(id)}>Add to Cart</button>
    </div>)
}

export default ItemCard;