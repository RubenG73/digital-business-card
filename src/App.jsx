import './App.css'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/footer'
import Info from './components/info'

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
