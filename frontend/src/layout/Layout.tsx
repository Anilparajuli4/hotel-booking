import Footer from "../component/Footer"
import Header from "../component/Header"
import Hero from "../component/Hero"
import SearchBar from "../component/SearchBar"

interface Props{
  children: React.ReactNode
}


function Layout({children}:Props) {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <Hero/>
        <div className="container mx-auto">
          <SearchBar/>
        </div>
        <div className="mx-auto container py-10 flex-1">
          {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout