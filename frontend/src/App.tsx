import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Register from "./pages/Register"
import Login from "./pages/Login"
import MyBooking from "./pages/MyBooking"
import MyHotel from "./pages/MyHotel"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>Home page</p></Layout>} />
        <Route path='/register' element={<Layout><Register/></Layout>}/>
        <Route path='/login' element={<Layout><Login/></Layout>}/>
        <Route path='/my-booking' element={<Layout><MyBooking/></Layout>}/>
        <Route path='/my-hotels' element={<Layout><MyHotel/></Layout>}/>
      </Routes>
    </Router>
  )
}

export default App