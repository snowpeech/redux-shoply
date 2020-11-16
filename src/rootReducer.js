import products from "./data.json";

const INITIAL_STATE = {cart:{},products};//needs this format to pull in cart component

function rootReducer(state = INITIAL_STATE, action) {  
  switch (action.type) {
    case "ADD":
      {//increase product qty by 1 
        console.log("add",state)
      let {id,price,name} = action.payload
      let {cart} = state;

      if(cart[id]){
        let newStat={"qty":cart[id]["qty"]+1, price,name}
        
        return {...state, cart:{...cart, [id]: newStat}}
      } else {
        return {...state, cart:{...cart, [id]:{"qty":1, price,name}}}
      }
    }

    case "SUBTRACT":
      {// decrease product qty by 1
          console.log("subtract")
        let {cart} = state;
        let {id,price,name} = action.payload;
        let newStat={"qty":cart[id]["qty"]-1, price,name}
        
        return {...state, cart:{...cart, [id]: newStat}}
      }
    
    case "CHANGE_QTY": //? optional toreplace add and subtract
      //update product qty to passed in num
      return state;
    
    case "REMOVE":{
      //remove item from cart
      let {cart} = state;
      let {id} = action.payload;        
      return {...state, cart:{...cart, [id]:{"qty":0}}}
    }
  
    default:
      return state;
  }
}

export default rootReducer;