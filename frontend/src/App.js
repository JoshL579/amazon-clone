import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import Deal from "./pages/Deal";
import CustomerService from "./pages/CustomerService";
import Registry from "./pages/Registry";
import GiftCard from "./pages/GiftCard";
import Sell from "./pages/Sell";
import Business from "./pages/SignIn/Business";
import "./App.css";
import Search from "./pages/Search";
import SingleProduct from "./pages/SingleProduct";
import { AuthContextProvider } from "./context/AuthContext";
import Checkout from "./pages/Checkout/Checkout";
import CartEmpty from "./pages/Cart/CartEmpty";

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<SingleProduct />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signin" element={<SignIn page="signin" />} />
            <Route path="/signup" element={<SignIn page="signup" />} />
            <Route path="/business" element={<Business />} />
            <Route path="/deal" element={<Deal />} />
            <Route path="/customer" element={<CustomerService />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/giftfcard" element={<GiftCard />} />
            <Route path="/sell" element={<Sell />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
