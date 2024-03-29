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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/Auth";
import PrivateRoute from "./Route/PrivetRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <PrivateRoute path="/home" element={<Home />} /> */}
          <Route path="/" element={<PrivateRoute Component={Home} />} />
          <Route
            path="/users"
            element={<PrivateRoute Component={UserList} />}
          />
          <Route
            path="/newUser"
            element={<PrivateRoute Component={NewUser} />}
          />
          <Route
            path="/user/:userId"
            element={<PrivateRoute Component={User} />}
          />
          <Route
            path="/products"
            element={<PrivateRoute Component={ProductList} />}
          />
          <Route
            path="/product/:productsId"
            element={<PrivateRoute Component={Product} />}
          />
          <Route
            path="/newproduct"
            element={<PrivateRoute Component={NewProduct} />}
          />

          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
