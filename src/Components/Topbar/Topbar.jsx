import React from "react";
import "./Topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { SiShopify } from "react-icons/si";
import { useAuth } from "../../context/Auth";

const Topbar = () => {
  const [auth] = useAuth();

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="navbar-brand">
            <SiShopify />
            <strong>.com</strong>
          </Link>
        </div>
        <div className="topRight">
          {!auth?.user && (
            <>
              <Link to={"/login"} className="Loin_button">
                Loin
              </Link>
              <Link to={"/sign-up"} className="signUp_button">
                Sign UP
              </Link>
            </>
          )}

          {auth?.user && (
            <>
              <div className="topbarIconsContainer">
                <NotificationsNoneIcon />
                <span className="topIconBag">2</span>
              </div>
              <div className="topbarIconsContainer">
                <LanguageIcon />
                <span className="topIconBag">5</span>
              </div>
              <div className="topbarIconsContainer">
                <SettingsIcon />
              </div>
              <Link to={"/login"}>
                <img
                  className="topAvatar"
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
