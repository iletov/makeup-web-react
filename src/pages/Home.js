import React from 'react'
import { useNavigate } from 'react-router-dom'
import { productsArray } from '../productsStore'
import { Carousel, Card, Form, Row, Col, Button, Container } from 'react-bootstrap'
import HomeProductCard from '../components/homeProductCard'
import image1 from '../images/banner1.jpg'
import image2 from '../images/banner2.jpg'
import image3 from '../images/banner3.jpg'
import '../styles/Home.css'

function Home() {
	const navigate = useNavigate()

	return (
		<>
			<Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/*--------------*/}

    <Container>
			<h3 align="center" className="py-5">Gallery</h3>
			<Row xs={1} md={2} lg={3} className="g-4">		
				<Col align='center'>
					<Card style={{ width: '18rem' }}>
				      <Card.Img variant="top" src={image1} style={{ height: '12rem' }} />
				      <Card.Body>
				        <Card.Title>2023</Card.Title>
				        <Button variant="outline-primary" onClick={() => navigate('/gallery-one')}>To Gallery</Button>
				      </Card.Body>
				    </Card>	
				</Col>	
			
				<Col align='center'>
					<Card style={{ width: '18rem' }}>
				      <Card.Img variant="top" src={image2} style={{ height: '12rem' }} />
				      <Card.Body>
				        <Card.Title>2022</Card.Title>
				        <Button variant="outline-primary" onClick={() => navigate('/gallery-two')}>To Gallery</Button>
				      </Card.Body>
				    </Card>	
				</Col>

				<Col align='center'>
					<Card style={{ width: '18rem' }}>
				      <Card.Img variant="top" src={image3} style={{ height: '12rem' }} />
				      <Card.Body>
				        <Card.Title>2021</Card.Title>
				        <Button variant="outline-primary" onClick={() => navigate('/gallery-three')}>To Gallery</Button>
				      </Card.Body>
				    </Card>	
				</Col>		
			</Row>
	</Container>	   

	<Container className='homeShop py-5'>
			<h3 align='center' style={{ marginTop: '50px', marginBottom: '50px'}}>Our Products</h3>
			<Row xs={1} md={2} lg={3} className='g-5'>

				{productsArray.map((item, index) =>(
					<Col align='center'>
						<HomeProductCard product={item} />
					</Col>
					))}
				</Row>

		</Container>

		<div className='about'>
					<h3>About me</h3>
					<div className='context'>
						<p>Lorem ipsum dolor sit amet, 
						consectetur adipiscing elit. 
						Phasellus lectus augue, scelerisque eu iaculis lacinia, 
						congue in ex. 
						Integer ut magna dolor. 
						Vivamus imperdiet urna sed rutrum efficitur. 
						Sed aliquam sem id elit auctor aliquet. 
						Curabitur scelerisque mi ex, mollis bibendum nisl tempus vel. 
						Ut tempus felis turpis, condimentum posuere orci fringilla ut. 
						Vivamus sagittis dolor lobortis, faucibus lectus ac, congue erat. 
						Curabitur luctus molestie blandit. Duis eu efficitur arcu, sit amet hendrerit metus. 
						Nam volutpat lorem in diam pellentesque, ut mollis ligula malesuada. 
						Suspendisse mollis tempus ligula, vel imperdiet erat maximus sit amet. 
						Curabitur a iaculis eros.</p>
						<img src={image3} alt='...' />
						
					</div>
					<Button variant='outline-primary'>Read More</Button>
				</div>

		</>
	)
}

 
	


export default Home;