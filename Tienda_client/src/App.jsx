import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar'

const Home = () => <h1>This is Homepage</h1>

const Product = () => <h1>This is a Single Product Page</h1>

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
