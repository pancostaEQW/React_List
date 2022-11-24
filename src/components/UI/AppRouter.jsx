// @ts-nocheck
import React from "react";
import Error from "../../pages/Error";
import Posts from "../../pages/Posts";
import About from "../../pages/About";
import { Redirect, Switch, Route } from "react-router-dom";
import PostIdPage from "../../pages/PostIdPage";
import { publicRoutes, privateRoutes } from "../../router";
import { useContext } from "react";
import { AuthContext } from "../../context";
import Loader from "./Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
   console.log(isAuth)

   if(isLoading) {
    return <Loader/>
   }

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};


export default AppRouter;
