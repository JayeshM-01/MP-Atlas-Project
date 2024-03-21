import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Slider/>
    <Cards/>
    <Footer/>
    </div>
  );
}

export default App;
