import './index.css'
import WeatherAPIProvider from './components/WeatherAPI'
import Home from './pages/Home'
import Forecast from './pages/Forecast'
import BookMarks from './pages/BookMark'
import NavBar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {


  return (
<WeatherAPIProvider>
 <Router>
  <NavBar/>
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


