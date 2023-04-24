import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import "./App.css";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import Notfound from "./Pages/Notfound/Notfound";
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/NewProduct/NewProduct";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productsId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
