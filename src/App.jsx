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
        <div className="flex flex-col min-h-screen">
          <NavBar />
          
          <main className="flex-grow">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/forecast' element={<Forecast />} />
              <Route path='/bookmarks' element={<BookMarks />} />
            </Routes>
          </main>
          
          <footer className='text-center py-4 bg-base-200 text-base-content'>
            Made By <a href="https://github.com/Chisomworlu12" className='underline text-primary hover:text-primary-focus'>Chisom Worlu</a> with ❤
          </footer>
        </div>
      </Router>
    </WeatherAPIProvider>
  )
}

export default App