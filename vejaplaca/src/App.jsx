import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Plate from "./pages/Plate.jsx";
import Suport from "./pages/Suport.jsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suporte" element={<Suport />} />
          <Route path="/placa" element={<Plate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
