import HeroBanner from "./Components/Banner/HeroBanner";
import FeaturedCards from "./Components/FeaturedProducts/FeaturedCards";
import Topbar from "./Components/Topbar/Topbar";


function App() {
  return (
    <div className="App">
    <Topbar/>
    <HeroBanner/>
    <FeaturedCards/>
    </div>
  );
}

export default App;
