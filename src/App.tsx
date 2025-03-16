import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.tsx'
import HomePage from './pages/HomePage.tsx'
import Footer from './components/Footer/Footer.tsx'

function App() {

  return (
  <Router>
    <Header />
    <div className='mx-auto'>
      <Routes>
          <Route path='/' element={<HomePage />}/>
      </Routes>
    </div>
    <Footer />
    <div className="flex align-middle gap-[8px] w-full justify-center py-[20px] text-stone-600 font-semibold" ><h3 className="text-center w-full">Copyright © 2025 - Renovation Site</h3></div>
  </Router>
  )
}

export default App
