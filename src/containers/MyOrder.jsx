import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';

import flechaLogo from "@icons/flechita.svg"

//importo el contexto
import { AppContext } from '../context/AppContext';

const MyOrder = () => {

	//traigo el estado para pasarlo a los items del carrito
	const { state } = useContext(AppContext);

	//sumTotal del price, reduce
	const sumTotal = () => {
		const reducer = (acum, item) => acum += item.price;

		//reducer sobre todos los elementos del cart
		const sum = state.cart.reduce(reducer, 0)

		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechaLogo} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{
					//itero por cada item del carrito
					state.cart.map(product => (
						<OrderItem product={product} key={`orderItem-${product.id}`} />
					))
				}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p> $ {sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
