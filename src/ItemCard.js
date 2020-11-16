import React from "react";
import {useDispatch} from 'react-redux';
import "./styles/ItemCard.css"

const ItemCard =({name, price, id, image_url})=>{
    const dispatch = useDispatch();

    const addItem=(id,price)=>{
        dispatch({type:"ADD",payload:{id,price,name}})
    }
    
    return(
    <div className="ItemCard">
        <a href={`/products/${id}`}>
        <img top src={image_url} alt={`${name} image`} className="ItemCard-image"/>

        <div>
            <h5>{name}</h5>
            <div className="ItemCard-price">${price}</div>
            
        </div>
        </a>
        <button className="ItemCard-button" onClick={()=>addItem(id,price)}>Add to Cart</button>  
    </div>)
}

export default ItemCard;