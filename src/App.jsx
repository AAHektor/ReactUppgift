import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/styles.css'
import Home from './views/Home'
import Contact from './views/Contact'
import Header from './components/Header/Header'

function App() {

  return (
    <BrowserRouter>
      <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
