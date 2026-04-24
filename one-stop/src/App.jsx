import './App.css'
import LoginPage from './Login.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return(
    <div className='body'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
