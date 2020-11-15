const INITIAL_STATE = {cart:{}};//needs this format to pull in cart component

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      const {id} = action.payload
      let {cart} = state;

      if(cart[id]){
        
        return {...state, cart:{...cart, [id]: cart[id]+1}}
        
      } else {
        
        return {...state, cart:{...cart, [id]:1}}
      }
      
    case "SUBTRACT":
        // decrease product qty by 1
        return {...state, cart:{...cart, [id]: cart[id]-1}};
    
    case "CHANGE_QTY": //? optional toreplace add and subtract
      //update product qty to passed in num
      return state;
    
    case "REMOVE":
      //remove item from cart
      return state;
    

    default:
      return state;
  }
}

export default rootReducer;