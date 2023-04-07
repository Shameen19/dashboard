import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Pricing plan/index";
import BuyCredits from "./components/Stripe/BuyCredits";
import Charts from "./components/Analysis/Charts";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>

        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
