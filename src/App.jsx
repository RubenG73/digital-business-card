import './App.css'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import Info from './components/Info'

function App() {
  return(
  <div className='app-container'>
      <div className='content'>
        <Info />
        <About />
        <Interests />
      </div>
      <Footer />
  </div>

  )
}

export default App
