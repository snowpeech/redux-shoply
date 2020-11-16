import React from "react";
import products from "./data.json";
import ItemCard from "./ItemCard"
// import "./styles/ProductList.css"

const ProductList =()=>{
    let productArr=[]; 

    for(const [key, value]  of Object.entries(products["products"])){
        let x = {...value,id:key}
        productArr.push(x); 
    }
    
    return(<div className="ProductList flex-container">
        {productArr.map(item =><ItemCard key={item.id}  id={item.id} name={item.name} price = {item.price} description={item.description} image_url={item.image_url} />)} 
        </div>)
}

export default ProductList;