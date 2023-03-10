import { useState } from "react";

//estado inicial, del carrito
const initialState = {
  cart: []
}


function useInitialState() {
  const [state, setState] = useState(initialState)

  //agregar producto al carrito
  const addToCart = (payload) =>[
    setState({
      ... state,
      cart: [... state.cart, payload]
    })
  ]

  return {state, addToCart}
}

export {useInitialState}
