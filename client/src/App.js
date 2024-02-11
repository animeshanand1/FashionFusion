import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
