import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Carousel, Card, Form, Row, Col, Button, Container } from 'react-bootstrap'
import MultiCarousel from '../components/multiCarousel'
import image1 from '../images/banner1.jpg'
import image2 from '../images/banner2.jpg'
import image3 from '../images/banner3.jpg'
import '../styles/Home.css'


function Home() {
	const navigate = useNavigate()

	return (
		<>
		{/*---------Top Section------*/}

			<Carousel className='carousel'>
      <Carousel.Item className='darken'>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption >
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        	<h2>First slide label</h2>
        	<Button className='topBtn' variant='primary'>SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item className='darken'>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <h2>Second slide label</h2>
          <Button className='topBtn' variant='primary'>RESERVE</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/*-------Gallery-------*/}

    <div className='wrap'>
			{/*<h1 align="center" style={{ marginTop: '100px', marginBottom: '100px'}}>Gallery</h1>*/}
			
			<Row xs={1} md={2} lg={3} className="g-0">		
				<Col align='center'>
					<Card className='card home'>
				      <Card.Img variant="top" src={image1} style={{ height: '16rem' }} />
				      <Card.Body className='cardContent'>
				        <Card.Title>2023</Card.Title>
				        <Button variant="outline-primary" onClick={() => navigate('/gallery-one')}>To Gallery</Button>
				      </Card.Body>
				    </Card>	
				</Col>	
			
				<Col align='center'>
					<Card className='card home'>
				      <Card.Img  
				      					variant="top" src={image2} 
				      					style={{ height: '16rem', cursor: 'pointer' }} />
				      <Card.Body className='cardContent'>
				        <Card.Title>2022</Card.Title>
				        <Button variant="outline-primary" onClick={() => navigate('/gallery-two')}>To Gallery</Button>
				      </Card.Body>
				    </Card>	
				</Col>

				<Col align='center'>
					<Card className='card home'>
				      <Card.Img 
				      					variant="top" src={image3} 
				      					style={{ height: '16rem', cursor: 'pointer' }} />
				     <Card.Body className='cardContent'>
				        <Card.Title>2021</Card.Title>
				        <Button variant="outline-primary" onClick={() => navigate('/gallery-three')}>To Gallery</Button>
				      </Card.Body>
				    </Card>	
				</Col>		
			</Row>
	</div>	   

	{/*----------Shop----------*/}

		<Container className='homeShop'>
			<h1 align='center' style={{ marginTop: '100px', marginBottom: '25px'}}>Our Products</h1>
				<MultiCarousel />
		</Container>
			

		{/*------about me--------*/}

		<div className='about'>
					<h1>About me</h1>
					<div className='context'>
						<p className='fw-light'>Lorem ipsum dolor sit amet, 
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
					<Button variant='outline-light' onClick={() => navigate('/about')}>Read More</Button>
				</div>

		</>
	)
}

 
	


export default Home;