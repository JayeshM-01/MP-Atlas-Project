import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <div>Slider</div>
    <div>Boxes</div>
    <Footer/>
    </div>
  );
}

export default App;
