
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/HomePage/Home'
import Layout from './components/layout/Layout'
import ShopCategory from './pages/ShopCategory/ShopCategory'
import Productpage from './pages/ProductPage/Productpage'
import Cart from './pages/Cart/Cart'
import Authpage from './pages/Authpage/Authpage'

function App() {


  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path="/product" element={<Productpage/>}>
          <Route path=':productId' element={<Productpage/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Authpage/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App
