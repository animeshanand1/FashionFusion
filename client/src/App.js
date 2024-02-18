import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import SpecificProduct from './Components/SpecificProduct/SpecificProduct';
import Topbar from './Components/Topbar/Topbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/account/login" element={<Login />} />
        <Route path="/" element={<Homepage/>} />
        <Route path="/product" element={[<Topbar/>,<SpecificProduct/>,<Footer/>]} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
