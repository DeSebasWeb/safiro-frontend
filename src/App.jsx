import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App