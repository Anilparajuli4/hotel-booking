import { Link } from "react-router-dom"
import { UseAppContext } from "../context/AppContext"
import SignOutButton from "./SignOutButton"


function Header() {
  const {isLoggedIn} = UseAppContext()

 
 
  return (
    <div className="bg-blue-800 py-6 ">
        <div className="container mx-auto flex justify-between">
            <span className="text-3xl text-white font-bold tracking-tight">
                <Link to='/'>ExpressHoliday.com</Link>
            </span>
            <span className="flex space-x-2 cursor-pointer">
              {isLoggedIn ? <>
              <Link className="flex items-center text-white px-3 font-bold hover:bg-blue-500" to='/my-bookings'>My Bookings</Link>
              <Link className="flex items-center text-white px-3 font-bold hover:bg-blue-500" to='/my-hotels'>My Hotels</Link>
               <SignOutButton/>
              </> :
                   <Link  to='/login' className="flex items-center text-blue-600 px-3 font-bold hover:bg-gray-100 hover:text-green-500">Sign in</Link>
                  }
                   </span>
        </div>
    </div>
  )
}

export default Header