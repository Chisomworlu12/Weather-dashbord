import './index.css'
import Home from './home/Home'
import WeatherAPIProvider from './components/WeatherAPI'

function App() {


  return (
   
    <WeatherAPIProvider>
     <Home/>
   </WeatherAPIProvider>
  )
}

export default App
