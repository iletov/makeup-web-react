import React, { useState }from 'react'
import '../styles/galleryOne.css'
import {Row, Col, Card } from 'react-bootstrap'
import CloseIcon from '@mui/icons-material/Close';
import img1 from '../images/p1.jpg'
import img2 from '../images/p2.jpg'
import img3 from '../images/p3.jpg'
import img4 from '../images/p4.jpg'
import img5 from '../images/p5.jpg'
import img6 from '../images/p6.jpg'
import img7 from '../images/p7.jpg'
import img8 from '../images/p8.jpg'
import img9 from '../images/p9.jpg'
import img10 from '../images/p10.jpg'


function GalleryOne() {

	let data = [
	{
		id: 1,
		imgSrc: img1,
	},
	{
		id: 2,
		imgSrc: img2,
	},
	{
		id: 3,
		imgSrc: img3,		
	},
	{
		id: 4,
		imgSrc: img4,
	},
	{
		id: 5,
		imgSrc: img5,
	},
	{
		id: 6,
		imgSrc: img6,
	},
	{
		id: 7,
		imgSrc: img7,		
	},
	{
		id: 8,
		imgSrc: img8,
	},
	{
		id: 9,
		imgSrc: img9,		
	},
	{
		id: 10,
		imgSrc: img10,
	},
]

	const [model, setModel] = useState(false);
	const [tempimgSrc, setTempImgSrc] = useState('');
	
	const getImg = (imgSrc) => {
		setTempImgSrc(imgSrc);
		setModel(true);
	}

	return (
		<>
			<div className={model? "model open" : "model"}>
				<img src={tempimgSrc} />
				<CloseIcon onClick={() => setModel(false)}/>	
			</div>
			<div className='galleryHeader'>
				<h1>2023</h1>
			</div>

			<Row xs={1} md={2} lg={4} className='gallery g-0'>
				{data.map((item, index)=> {
					return (

						<div className='pics' onClick={() =>getImg(item.imgSrc)} >
							<img src={item.imgSrc} />
						</div>
					
					)
				})}
			</Row>	
		</>
	)
}

export default GalleryOne