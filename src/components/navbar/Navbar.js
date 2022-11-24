import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function ButtonAppBar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [menuToggel, setMenuToggel] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="navbar">
        <AppBar position="fixed">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon onClick={() => setMenuToggel(!menuToggel)} />
            </IconButton> */}
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" className="button">
                BLOG-APP
              </Link>
            </Typography>

            {user ? (
              <div className="loginBox">
                <div>
                  <Link to={"/user/dashboard"} className="link">
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                      {user.data.result.username[0]}
                    </Avatar>
                  </Link>
                </div>
                <div>
                  <Typography
                    className="logoutBtn"
                    style={{ fontSize: 15 }}
                    onClick={() => {
                      setMenuToggel(!menuToggel);
                      window.localStorage.clear();
                      navigate("/");
                    }}
                  >
                    {" "}
                    LOGOUT
                  </Typography>
                </div>
                {/* <span
                  style={{
                    fontSize: "17px",
                    color: "yellow",
                    fontWeight: "bold",
                  }}
                >
                  {user.data.result.username}
                </span> */}
              </div>
            ) : (
              <div className="loginBox">
                <Link to="/login" className="button">
                  Login
                </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {/* {menuToggel && (
        <div className="menu">
          <ul>
            {!user ? (
              <li>
                <Link to="/login" className="link">
                  Login / Sign Up
                </Link>
              </li>
            ) : (
              <>
                <li className="namelink">
                  {user.data.result.fullname.toUpperCase()}
                </li>
                <li onClick={() => setMenuToggel(!menuToggel)}>
                  <Link to={"/user/dashboard"} className="link">
                    Dashboard
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setMenuToggel(!menuToggel);
                    window.localStorage.clear();
                    Navigate("/posts");
                  }}
                >
                  LogOut
                </li>
              </>
            )}
          </ul>
        </div> 
      )}*/}
    </>
  );
}
