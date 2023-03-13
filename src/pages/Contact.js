import React from 'react'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import '../styles/Contact.css'

function Contact() {
	return (
		<>
			<section className='contact'>
				<div className='content'>
					<h1>Contact Me</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. </p>
				</div>
				<div className='containerWrapper'>
					<div className='contactInfo'>

						<div className='box'>
							<div className='icon'><PlaceOutlinedIcon /></div>
							<div className='text'>
								<h3>Address</h3>
								<p>Earth, Europe<br/>Bulgaria<br/>Pleven</p>
							</div>
						</div>

						<div className='box'>
							<div className='icon'><LocalPhoneOutlinedIcon /></div>
							<div className='text'>
								<h3>Phone</h3>
								<p>+359 12 123 1234 </p>
							</div>
						</div>

						<div className='box'>
							<div className='icon'><EmailOutlinedIcon /></div>
							<div className='text'>
								<h3>Email</h3>
								<p>Email@example.com</p>
							</div>
						</div>
					</div>

					<div className='contactForm'>
						<form>
							<h1>Send Message</h1>
							<div className='inputBox'>
								<input type='text' name='name' required='required' />
								<span>Full Name</span>
							</div>

							<div className='inputBox'>
								<input type='text' name='email' required='required' />
								<span>Email</span>
							</div>

							<div className='inputBox'>
								<textarea name='message' required='required'></textarea>
								<span>Type your Message</span>
							</div>

							<div className='inputBox'>
								{/*<input type='submit' name='' value='Send' />*/}
								<button type="submit" className='btn btn-primary'>Send</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}

export default Contact