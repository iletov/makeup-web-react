import React, { useContext } from 'react';
import { Card, Button, Form, Row, Col} from 'react-bootstrap';
import { CartContext } from '../CartContext';

function ProductCard(props) { //props.product is the product 
	const product = props.product;
	const cart = useContext(CartContext);	
	const productQuantity = cart.getProductQuantity(product.id);
	// console.log(cart.items);
	return (
		
			<Card style={{ width: '18rem' }}>
				<Card.Img src={product.image} style={{ height: '14rem' }}/>
				<Card.Body>
					<Card.Title>{product.title}</Card.Title>
					<Card.Text>${product.price}</Card.Text>
					{productQuantity > 0 ?
						<>
							<Form as={Row}>
								<Form.Label column='true' sm='6'>In Cart: {productQuantity}</Form.Label>
								<Col sm='6'>
									<Button sm='6' className='mx-2' onClick={() => cart.addToCart(product.id)}>+</Button>
									<Button sm='6' className='mx-2' onClick={() => cart.removeFromCart(product.id)}>-</Button>
								</Col>
							</Form>
							<Button variant='outline-danger' className='my-2' onClick={() => cart.deleteFromCart(product.id)}>Remove from Cart</Button>
						</>
						:
					<Button variant='outline-primary' onClick={() => cart.addToCart(product.id)}>Add To Cart</Button>
					}
				</Card.Body>
			</Card>
		
	)
}

export default ProductCard