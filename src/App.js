import Home from "./My Components/Home";
import Navbar from "./My Components/Navbar";
import Footer from "./My Components/Footer";
import Features from "./My Components/Features";
import { Routes , Route } from "react-router-dom";
import Pricing from "./My Components/Pricing";
function App() {
  return (
    <div className="App">
         <h1 style={{ textAlign: "center" }}>Welcome to Toony's Family Dinner</h1>
         <Home/>
         <Navbar/>
         <Features/>
         <Pricing/>
         <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Pricing" element={<Pricing/>}/>
          <Route path="/Features" element={<Features/>}/>
         </Routes>
         <Footer/>
    </div>
  );
}

export default App;   
