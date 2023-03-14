import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import {Row, Col} from 'react-bootstrap'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
	return (
		<div className='mainFooter'>
			<div className='container'>
			<Row xs={1} md={3} lg={3} className='footerRow'>
				<Col>
					<h4>Links</h4>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/store'>Store</Link>
					<Link to='/contact'>Contact</Link>
				</Col>
				<Col>
					<h4>Contact</h4>
					<p>Adress</p>
					<p>Email@example.com</p>
					<p>Phone: 012 123 1234</p>
				</Col>
				<Col className='socialIcons'>
					<h4>Social</h4>
					<a href='#'><FacebookOutlinedIcon /></a>
					<a href='#'><TwitterIcon /></a>
					<a href='#'><InstagramIcon /></a>
				</Col>
			</Row>	
			<Row className='secondRow'>
				<hr />
				<Col>
					<p>
						&copy;{new Date().getFullYear()} Petya Mincheva
					</p>
				</Col>
			</Row>
			</div>
		</div>
	)
}

export default Footer