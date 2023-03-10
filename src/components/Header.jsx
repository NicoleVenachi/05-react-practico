import React, { useState, useContext } from 'react'

//components
import Menu from "@components/Menu"
import MyOrder from "@containers/MyOrder"

import '@styles/Header.scss'

//asets
import menu from '@icons/icon_menu.svg';
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";

//importo el context
import { AppContext } from '../context/AppContext';


function Header() {
  //traigo estado del carrito, para contar
  const { state } = useContext(AppContext);

  //toggle del menu de usuario
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prevState => !prevState)
  }

  //toggle checkout
  const [toggleOrders, setToggleOrders] = useState(false);

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email"
            onClick={handleToggle}
          >platzi@example.com</li>
          <li
            className="navbar-shopping-cart"
            onClick={(() => setToggleOrders(prevState => !prevState))}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {
              //si hay algo en carrito muestro numero, sino nada
              //el div en su estilo tiene el circulito
              state.cart.length > 0 ? <div> {state.cart.length} </div> : null
            }


          </li>
        </ul>
      </div>

      {
        //si toggle es true, muestra menu
        !!toggle && <Menu />
      }

      {
        //muestro las ordenes
        !!toggleOrders && <MyOrder />
      }

    </nav>
  )
}

export { Header }
