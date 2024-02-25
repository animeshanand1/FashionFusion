import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import SpecificProduct from './Components/SpecificProduct/SpecificProduct';
import Topbar from './Components/Topbar/Topbar';
import Footer from './Components/Footer/Footer';
import Otp from './Components/OTP/Otp';
import Signup from './Pages/Signup/Signup';
import Account from './Pages/Account/Account';
import Mycart from './Pages/Cart/Mycart';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/my-account" element={<Account />} />
        <Route path="/cart" element={[<Mycart />,<Footer/>]}/>
        <Route path="/account/signup" element={<Signup />} />
        <Route path="/" element={<Homepage/>} />
        <Route path="/verify-otp" element={<Otp/>} />
        <Route path="/product" element={[<Topbar/>,<SpecificProduct/>,<Footer/>]} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
