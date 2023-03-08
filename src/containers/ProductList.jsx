import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {

	const [products, setProducts] = useState([]);

	useEffect(async () => {

		try {
			const response = await fetch(API)
			const data = await response.json()

			//paso los datos de los productos
			setProducts(data)
		} catch (error) {
		}
	}, [])

	return (
		<section className="main-container">
			<div className="ProductList">
				{

					//itero entre todos los productos traidos
					products.map((product) => (
						<ProductItem />
					))
				}
				{

				}

			</div>
		</section>
	);
}

export default ProductList;
