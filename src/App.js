import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar";
import MainApp from "./MainApp";
import Register from "./navbar/Register";
import Login from "./navbar/Log";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainApp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
