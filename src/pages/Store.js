import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import { productsArray } from '../productsStore'
import ProductCard from '../components/productCard'

function Store() {
	return (
		<>
			<Container>
			<h3 align="center" className="py-5">Store</h3>
			<Row xs={1} md={2} lg={3} className="g-4">
				
				{productsArray.map((item, idx) => (
					<Col align='center' key={idx}>
						<ProductCard product={item}/>
					</Col>
					))}
			
			</Row>
			</Container>
		</>
	)
}

export default Store