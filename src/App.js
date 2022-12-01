import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Index from "./components/Index/Index";
import User from "./components/Users/User";
import Users from "./components/Users/Users";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="cart" element={<Cart />} />
      <Route path="details" element={<Details />} />
      <Route exact path="users" element={<Users />} />
      <Route path="users/:id" element={<User />} />
    </Routes>
  );
}

export default App;
