import React, { useState } from 'react'

//components
import Menu from "@components/Menu"

import '@styles/Header.scss'

//asets
import menu from '@icons/icon_menu.svg';
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";

function Header() {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prevState => !prevState)
  }

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
          <li className="navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>

      {
        //si toggle es true, muestra menu
        !!toggle && <Menu />
      }

    </nav>
  )
}

export { Header }
