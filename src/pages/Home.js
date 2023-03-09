import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Carousel, Card, Form, Row, Col, Button, Container } from 'react-bootstrap'
import image1 from '../images/makeup1.jpg'
import image2 from '../images/makeup2.jpeg'
import image3 from '../images/makeup3.jpg'
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
				        <Card.Title>Card Title</Card.Title>
				        <Button variant="primary" onClick={() => navigate('/gallery-one')}>Go somewhere</Button>
				      </Card.Body>
				    </Card>	
				</Col>	
			
				<Col align='center'>
					<Card style={{ width: '18rem' }}>
				      <Card.Img variant="top" src={image2} style={{ height: '12rem' }} />
				      <Card.Body>
				        <Card.Title>Card Title</Card.Title>
				        <Button variant="primary" onClick={() => navigate('/gallery-two')}>Go somewhere</Button>
				      </Card.Body>
				    </Card>	
				</Col>

				<Col align='center'>
					<Card style={{ width: '18rem' }}>
				      <Card.Img variant="top" src={image3} style={{ height: '12rem' }} />
				      <Card.Body>
				        <Card.Title>Card Title</Card.Title>
				        <Button variant="primary" onClick={() => navigate('/gallery-three')}>Go somewhere</Button>
				      </Card.Body>
				    </Card>	
				</Col>		
			</Row>
	</Container>	   

		</>
	)
}

export default Home