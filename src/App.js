import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'
import Contact from './pages/Contact'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import GalleryOne from './pages/galleryOne'
import GalleryTwo from './pages/galleryTwo'
import GalleryThree from './pages/galleryThree'
import CartProvider from './CartContext'

function App() {
  return (
    <div className="App">  
    <CartProvider>
    <BrowserRouter>
        <NavbarComponent></NavbarComponent>
       
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/store' element={<Store />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/gallery-one' element={<GalleryOne />} />
            <Route path='/gallery-two' element={<GalleryTwo />} />
            <Route path='/gallery-three' element={<GalleryThree />} />
            <Route path='/success' element={<Success />} />
            <Route path='/cancel' element={<Cancel />} />
          </Routes>
        
      </BrowserRouter>
      </CartProvider>
      </div>
  );
}

export default App;
