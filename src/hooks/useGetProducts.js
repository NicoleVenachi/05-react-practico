import {useEffect, useState} from 'react'

const useGetProducts = (API) =>{

  //creo un estado para los productos
  const [products, setProducts] = useState([]);

	useEffect(async () => {
    //hago la petición a la API
		try {
			const response = await fetch(API)
			const data = await response.json()

			//actualizo los datos de los productos
			setProducts(data)
		} catch (error) {
		}
	}, [])

  //devuelvo la info de los prodcutos
  return products
}

export {useGetProducts}