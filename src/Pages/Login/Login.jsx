import React, { useState } from "react";
import "./Login.css";
import Topbar from "../../Components/Topbar/Topbar";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../context/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const nvigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const login_user_data = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        { email, password }
      );

      if (login_user_data.data.success) {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/auth/admin-auth",
          {
            headers: {
              authorization: login_user_data.data.token,
            },
          }
        );

        if (data.ok) {
          toast.success(login_user_data.data.message);
          setAuth({
            ...auth,
            user: login_user_data.data.user,
            token: login_user_data.data.token,
          });
          localStorage.setItem("auth", JSON.stringify(login_user_data.data));
          nvigate('/')
        } else {
          toast.error("Login by admin account");
        }
      }
      else{
        toast.error(login_user_data.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    }
  };

  // console.log(auth);
  return (
    <div className="login">
      <Topbar />
      <div className="container">
        <form className="login_form">
          <input
            type="text"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary_btn login_btn" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
