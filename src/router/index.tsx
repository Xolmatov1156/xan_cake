import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Basket from '../pages/Basket'

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/basket' element={<Basket/>} />
    </Routes>
  )
}

export default CustomRoutes