import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import SpecificProduct from './Components/SpecificProduct/SpecificProduct';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage/>} />
        <Route path="/product" element={<SpecificProduct/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
