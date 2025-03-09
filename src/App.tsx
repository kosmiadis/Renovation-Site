import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.tsx'
import HomePage from './pages/HomePage.tsx'

function App() {

  return (
  <Router>
    <Header />
    <div className=' mx-auto'>
      <Routes>
          <Route path='/' element={<HomePage />}/>
      </Routes>
    </div>
  </Router>
  )
}

export default App
