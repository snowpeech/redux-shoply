import React from "react";
import {useDispatch} from 'react-redux'
import "./styles/CartCard.css"

const CartCard =({name, price, id, qty})=>{
    const dispatch = useDispatch();
    const addItem=(id, price,name)=>{
        console.log("add item from card",id)
        dispatch({type:"ADD",payload:{id, price,name}})
    }
    const subtractItem=(id)=>{
        console.log("subtract item from card",id)
        dispatch({type:"SUBTRACT",payload:{id, price,name}})
    }
    const removeItem=(id)=>{
        console.log("subtract item from card",id)
        dispatch({type:"REMOVE", payload:{id}})
    }

    const subtotal = price * qty;

    const card = 
    <div className="CartCard">
        <div className="group">
            <button className = "delBtn"onClick={()=>removeItem(id,price,name)}>X</button>
            <div className="title">{name}</div>
        </div>

        <div >${price}</div>
    
        <div className="button-group">
            <button className="btn-left" onClick={()=>subtractItem(id,  price,name)}>-</button>
             <span> {qty} </span>
            <button className="btn-right" onClick={()=>addItem(id, price,name)}>+</button>
        </div>
    <div>${subtotal.toFixed(2)}</div>
    </div>
    
    return(<>
    {qty>0 ? card : ""}
    </>)
}

export default CartCard;