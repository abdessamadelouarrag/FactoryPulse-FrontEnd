import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Machines from "./pages/Machines";
import AddMachine from "./pages/AddMachines";
import NavBar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/machines/new" element={<AddMachine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;