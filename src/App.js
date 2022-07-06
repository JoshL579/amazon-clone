import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignIn/SignUp";
import Deal from "./pages/Deal";
import CustomerService from "./pages/CustomerService";
import Registry from "./pages/Registry";
import GiftCard from "./pages/GiftCard";
import Sell from "./pages/Sell";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
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
