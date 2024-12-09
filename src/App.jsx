
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Home from "./components/Home"
import AddCar from './components/AddCar';

function App() {


  return (
    <>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path='/addcab' element={<AddCar />} />
        </Routes>
    </>
  )
}

export default App
