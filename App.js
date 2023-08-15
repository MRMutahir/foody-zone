import "./App.css";
import MainInner from "./component/MainInner";
import NavbarMain from "./component/NavbarMain";
import {
  BrowserRouter as Router,
  Switch,
  Route,Routes,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
     
     <div className="main-container">
        <NavbarMain />
        {/* <MainInner /> */}
 <Routes>
  <Route  path="/ALL" element={<div>SALAM</div>} Component={MainInner}></Route>
  {/* <Route path="/" Component={NavbarMain}></Route> */}
 </Routes>
      </div>


    </>
  );
}

export default App;
