//import logo from './logo.svg'
import './App.css'
import { Header } from './Components/Header'
import { Welcome } from './Components/Welcome'
import { Contact } from './Components/Contact'
import { About } from './Components/About'
import { Footer } from './Components/Footer'
import { Offerings } from './Components/Offerings'
function App() {
  return (
    <div className='App'>
      <Header />
      <Welcome />
      <Offerings />

      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
