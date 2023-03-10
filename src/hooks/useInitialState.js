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

  //eliminar elementos del carrito
  const removeFromCart = (payload) => {
    setState({
      ... state,
      //cart será el mismo cart, pero quitando elementos con el id
      
      cart: state.cart.filter(items => items.id != payload.id)
    })
  }

  return {
    state,
    addToCart,
    removeFromCart
  }
}

export {useInitialState}
