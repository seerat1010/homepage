import "./App.css";
import Navbar from "./Components/Navbar";
import Sidenav from "./Components/Sidenav";
import Middlecomponent from "./Components/Middlecomponent";
import Sidecomponent from "./Components/Sidecomponent";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Sidenav/>
      <div className="App">
        
        <Middlecomponent />
        <Sidecomponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
