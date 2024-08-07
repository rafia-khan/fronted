
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'  
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'


import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png';
import Admin from './Components/Admin'
import About from './Pages/About'
function App() {
const {pathname}=useLocation()

  return (

      
      <div>
       {pathname!=='/admin'&&  <Navbar/>}
        
          <Routes>
          <Route path='/dashboard' element={<Shop/>}/>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
              <Route path="/product" element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
           
            <Route path='/login' element={<LoginSignup/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/about' element={<About />} />
            
            
          </Routes>
          {pathname!=='/admin'&&  <Footer/>}
         
        
        </div>
        
  )
}

export default App;
