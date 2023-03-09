import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { getProductData } from '../productsStore';

function CartProduct(props) {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const productData = getProductData(id);

	return (
		<>	
			<img src={productData.image} style={{ width:'75px', height:'75px' }}/>
			<h4>{productData.title}</h4>
			<p>{quantity} total</p>
			<p>${ (quantity * productData.price).toFixed(2) }</p>
			<Button size='sm' onClick={() => cart.deleteFromCart(id)}>Delete</Button>
			<hr></hr>
		</>
	)
}

export default CartProduct