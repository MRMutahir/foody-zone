import "./App.css";
import Breakfast from "./component/Breakfast";

import MainInner from "./component/MainInner";
import NavbarMain from "./component/NavbarMain";
import Lunch from "./component/Lunch";
import {
  BrowserRouter as Router,
  Switch,
  Route, Routes,
  Link
} from "react-router-dom";
function App() {
  return (
    <>

      <div className="main-container">
        <NavbarMain />
        {/* <MainInner /> */}
        <Routes>
          <Route path="/ALL" element={<div>SALAM</div>} Component={MainInner}></Route>
          <Route path="/Breakfast" element={<div>SALAM</div>} Component={Breakfast}></Route>
          <Route path="/Lunch" element={<div>SALAM</div>} Component={Lunch}></Route>
      
        </Routes>
      </div>


    </>
  );
}

export default App;
