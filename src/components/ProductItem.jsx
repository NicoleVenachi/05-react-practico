import React, { useContext } from 'react';
import '@styles/ProductItem.scss';

import addToCartImage from "@icons/bt_add_to_cart.svg"

//importo el contecto
import { AppContext } from '../context/AppContext';

const ProductItem = ({ product }) => {

	//traigo el setter del carrito
	const { state, addToCart } = useContext(AppContext);

	//paso el produto al carrito
	const handleClick = (item) => {
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p> ${product.price} </p>
					<p> {product.title} </p>
				</div>
				<figure
					onClick={(() => handleClick(product))}
				>
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
