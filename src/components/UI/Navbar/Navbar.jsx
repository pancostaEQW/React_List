import React from "react";
import { useContext } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <MyButton onClick={logout} >
        Exit...
      </MyButton>
      <div className="navbar__links"></div>
      <Link to="/about">About Project</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
};

export default Navbar;
