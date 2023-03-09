import React, { useState, useContext } from 'react';
import { NavLink} from 'react-router-dom';
import { Button, Container, Navbar, Modal, Nav} from 'react-bootstrap';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import './Navbar.css'

function NavbarComponent() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const cart = useContext(CartContext);

	// The sum of all items in the cart
	const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

	return (
		<>
			<Navbar expand='sm' className='navbar shadow-sm'>
				<Container>
					<Navbar.Brand href="/">Logo</Navbar.Brand>
					
					
					<Navbar.Toggle />

					<Navbar.Collapse className='justify-content-end' id='collapse'>
						<Nav className='nav me-auto'>
							<Nav.Link to={'/'} as={NavLink}>Home</Nav.Link>
							<Nav.Link to={'/about'} as={NavLink}>About</Nav.Link>
							<Nav.Link to={'/store'} as={NavLink}>Store</Nav.Link>
							<Nav.Link to={'/contact'} as={NavLink}>Contact</Nav.Link>
						</Nav>
						<Button onClick={handleShow}>Cart {productsCount} Items</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Shoping Cart</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{productsCount > 0 ?
					<>
						<p>Items in Your Cart:</p>
						{cart.items.map((currentProduct, idx) => (
							
							<CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
						))}
							<h5>Total: ${cart.getTotalCost().toFixed(2)}</h5>
							<Button variant='outline-success'>Purchase items!</Button>
					</>
					:
						<h4>Your Cart is Empty</h4>
					}
										
				</Modal.Body>
			</Modal>
		</>
	)
}

export default NavbarComponent