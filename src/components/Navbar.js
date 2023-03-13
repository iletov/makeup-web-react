import React, { useState, useContext } from 'react';
import { NavLink} from 'react-router-dom';
import { Button, Container, Navbar, Modal, Nav} from 'react-bootstrap';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import './Navbar.css'
import Logo from '../images/petya-logo.jpg'

function NavbarComponent() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const cart = useContext(CartContext);

	// The sum of all items in the cart
	const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

	return (
		<>
			<Navbar expand='sm' className='navbar shadow-sm' >
				<Container>
					<Navbar.Brand href="/">
								<img src={Logo} style={{ width: '75px' }} />
							</Navbar.Brand>
					
					
					<Navbar.Toggle className='navToggle'></Navbar.Toggle>

					<Navbar.Collapse className='justify-content-end' id='collapse'>
						<Nav className='nav me-auto'>
							<Nav.Link to={'/'} as={NavLink}>Home</Nav.Link>
							<Nav.Link to={'/about'} as={NavLink}>About</Nav.Link>
							<Nav.Link to={'/store'} as={NavLink}>Store</Nav.Link>
							<Nav.Link to={'/contact'} as={NavLink}>Contact</Nav.Link>
						</Nav>
						<Button onClick={handleShow}  
								style={{ 
										width: "3rem", 
										height: "3rem", 
										position: "relative", 
										color: '#000' }}
								variant='outline-light'
								className="rounded-circle">
							<svg
				              xmlns="http://www.w3.org/2000/svg"
				              viewBox="0 0 576 512"
				              fill="currentColor"><path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
				            </svg>
				            	<div
					              className="rounded-circle d-flex justify-content-center align-items-center"
					              style={{
					                color: "black",
					                backgroundColor: "white",
					                width: "1.5rem",
					                height: "1.5rem",
					                position: "absolute",
					                bottom: 0,
					                right: 0,
					                transform: "translate(25%, 25%)",
					              }}
					            >
					              {productsCount}
					            </div>
				            </Button>
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