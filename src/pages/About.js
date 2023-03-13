import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from '../images/happy.jpg'

function About() {
	return (
		<>
			<div className='storeWrap aboutMe'>
				<h1>About Me</h1>
			</div>
			<Container className='aboutCont'>
			<Row xs={1} lg={2} className='g-5'>
				<Col md={7} lg={8}>
					<h1>My Story</h1>
					<p className='fw-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
					
					<p className='fw-light'>Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>
				</Col>
				<Col  align='center' md={5} lg={4} className='imgColWrap'>
					<div className='imgCol'>
						<img src={Image}/>
					</div>
				</Col>
			</Row>
			</Container>
		</>
	)
}

export default About