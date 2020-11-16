import React from "react";
import {useParams} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import "./styles/ProductDetail.css"


const ProductDetail = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();

    const addItem=(id,price)=>{
        dispatch({type:"ADD",payload:{id,price,name}})
    }

    const products = useSelector(store => store.products).products;

    const {name, price, image_url, description} = products[id]

return(<div className="ProductDetail ">
    <h1> {name} </h1>
    <div className="flex-container ProductDetail-container">
        <img src={image_url} />
        <div className="details">
            <div>${price}</div>
            <div>{description}</div>
            <button onClick={()=>addItem(id,price)}>Add to Cart</button>  
        </div>
    </div>
</div>)
}

export default ProductDetail;