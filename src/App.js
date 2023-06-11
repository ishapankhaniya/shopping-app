import "./App.css";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Cartdisplay from "./Cartdisplay";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product from "./Product";
import Login from "./Login";
import ViewDetails from "./ViewDetails";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cartdisplay" element={<Cartdisplay />} />
          <Route path="/viewdetails" element={<ViewDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
