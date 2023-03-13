import React, { useContext } from 'react';
import { Card, Button, Form, Row, Col} from 'react-bootstrap';
import { CartContext } from '../CartContext';
import '../styles/homeProductCard.css'

function HomeProductCard(props) { 
	const product = props.product;
	const cart = useContext(CartContext);	
	const productQuantity = cart.getProductQuantity(product.id);
	// console.log(cart.items);
	return (
		
			<Card className='card'>
				<Card.Img src={product.image}/>
				<Card.Body>
					<Card.Title className='title'>{product.title}</Card.Title>
					<Card.Text>${product.price}</Card.Text>
					{productQuantity > 0 ?
						<>
							<Form as={Row}>
								<Form.Label column='true' sm='6'>In Cart: {productQuantity}</Form.Label>
								<Col sm='6' className='quantityBtn'>
									<Button variant='outline-light' sm='6' className='mx-2' onClick={() => cart.addToCart(product.id)}>+</Button>
									<Button variant='outline-light' sm='6' className='mx-2' onClick={() => cart.removeFromCart(product.id)}>-</Button>
								</Col>
							</Form>
							<Button id='removeBtn' variant='danger' className='my-2' onClick={() => cart.deleteFromCart(product.id)}>Remove from Cart</Button>
						</>
						:
					<Button className='addBtn' variant='outline-primary' onClick={() => cart.addToCart(product.id)}>Add To Cart</Button>
					}
				</Card.Body>
			</Card>
		
	)
}

export default HomeProductCard