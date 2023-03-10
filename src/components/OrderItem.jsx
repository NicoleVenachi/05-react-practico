import React, { useContext } from 'react';
import '@styles/OrderItem.scss';

import iconClose from "@icons/icon_close.png"

//traigo contexto
import { AppContext } from '../context/AppContext';

const OrderItem = ({ product }) => {

	const { removeFromCart } = useContext(AppContext)

	//logica para eliminarlo del carrito
	const handleRemove = item => {
		removeFromCart(item)
		console.log('asas');
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img
				onClick={(() => handleRemove(product))}
				src={iconClose}
				alt={product.title} />
		</div>
	);
}

export default OrderItem;
