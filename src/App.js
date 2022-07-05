import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Language from "./components/Language";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Deal from "./components/Deal";
import CustomerService from "./components/CustomerService";
import Registry from "./components/Registry";
import GiftCard from "./components/GiftCard";
import Sell from "./components/Sell";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/language" element={<Language />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/customer" element={<CustomerService />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/giftfcard" element={<GiftCard />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
