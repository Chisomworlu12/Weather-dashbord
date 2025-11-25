import './index.css'
import Home from './pages/Home'
import WeatherAPIProvider from './components/WeatherAPI'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Forecast from './pages/Forecast'
import FindLocation from './components/FindLocation'
import BookMarks from './pages/BookMark'

function App() {


  return (
    <WeatherAPIProvider>
      
  

 <Router>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><Link to="/">Home</Link></li>
    <li><Link to="/forecast">Forecast</Link></li>
     <li><Link to ="/bookmarks">Bookmark</Link></li>
      </ul>
    </div>
    <a className=" text-xl">Ople</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
        <li><Link to="/">Home</Link></li>
    <li><Link to="/forecast">Forecast</Link></li>
    <li><Link to ="/bookmarks">Bookmark</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    
     <FindLocation/>
  </div>
</div>
  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/forecast' element={<Forecast/>}/>
    <Route path='/bookmarks' element={<BookMarks/>}/>
   </Routes>
   </Router>
</WeatherAPIProvider>
  )
}

export default App


  //   <WeatherAPIProvider>
  //    <Home/>
  //  </WeatherAPIProvider>