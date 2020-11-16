import React from "react";
import { useSelector } from "react-redux";
import CartCard from './CartCard'
import "./styles/Cart.css"

const Cart =()=>{
    const cart = useSelector(store => store.cart);
    let cartArr=[]; 
    let cartTotal=0;

    for(const [key, value]  of Object.entries(cart)){
        let x = {...value,id:key}
        cartArr.push(x); 
        cartTotal += (x.price * x.qty);
        console.log("cartArr", )
    }

    //need to filter value isn't null and isn't 0

    //{name, price, id, qty}
    return(<>
    <h2>My Cart</h2>
    <div className="flex-container flex-column">
    <div className="Cart-banner">
        <div>Name</div> 
        <div>Price</div>
        <div>Qty</div>
        <div>Subtotal</div>
    </div> 
        {cartArr.map(item=><CartCard key={item.id} name={item.name} price={item.price} id={item.id} qty={item.qty} />)}
    </div>
    <div className="Cart-total"> Total: ${cartTotal.toFixed(2)}</div>

    </>)
}

export default Cart;