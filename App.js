import "./App.css";
import MainInner from "./component/MainInner";
import NavbarMain from "./component/NavbarMain";

function App() {
  return (
    <>
      <div className="main-container">
        <NavbarMain />
        <MainInner />
      </div>
    </>
  );
}

export default App;
