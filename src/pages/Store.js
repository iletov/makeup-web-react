import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import { productsArray } from '../productsStore'
import HomeProductCard from '../components/homeProductCard'
import '../styles/Pages.css'

function Store() {
	return (
		<>
		<div className='storeWrap'>
			<h1>Shop</h1>
		</div>
			<Container>
			<h3 align="center" className="py-5">Store</h3>
			<Row xs={1} md={2} lg={4} className="g-4">
				
				{productsArray.map((item, idx) => (
					<Col align='center' key={idx}>
						<HomeProductCard product={item}/>
					</Col>
					))}
			
			</Row>
			</Container>
		</>
	)
}

export default Store