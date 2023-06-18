import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import MyNavBar from "./components/MyNavBar";

import Regolamento from "./components/Regolamento";
import Squadre from "./components/Squadre";
import Details from "./components/Details";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regolamento" element={<Regolamento />} />
          <Route path="/squadre" element={<Squadre />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
