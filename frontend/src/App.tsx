import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Register from "./pages/Register"
import Login from "./pages/Login"
// import MyBooking from "./pages/MyBooking"
// import MyHotel from "./pages/MyHotel"
import { UseAppContext } from "./context/AppContext"
import AddHotel from "./pages/AddHotel"
import MyHotel from "./pages/MyHotel"

function App() {
  const {isLoggedIn} = UseAppContext()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>Home page</p></Layout>} />
        <Route path='/register' element={<Layout><Register/></Layout>}/>
        <Route path='/login' element={<Layout><Login/></Layout>}/>
        {isLoggedIn &&  <Route path='/add-hotel' element={<Layout><AddHotel/></Layout>}/>}
        {/* <Route path='/my-booking' element={<Layout><MyBooking/></Layout>}/> */}
        <Route path='/my-hotels' element={<Layout><MyHotel/></Layout>}/>
      </Routes>
    </Router>
  )
}

export default App