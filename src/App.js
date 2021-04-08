import "./App.css";
import FuelData from "./components/fuelHistory/fuelData";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

//for review
function App() {
  return (
    <>
      <div className="grid-container">
        <div className="slidbar">
          <Sidebar />
        </div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="body">
          <FuelData />
        </div>
      </div>
    </>
  );
}

export default App;
