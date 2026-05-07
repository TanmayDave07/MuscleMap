import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ExerciseDetail from './Pages/ExerciseDetail'

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </div>
  )
}

export default App
