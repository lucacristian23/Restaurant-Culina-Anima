import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import OrderNow from "./OrderNow";
import SocialMedia from "./SocialMedia";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu/*" element={<Menu />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

/*



*/
