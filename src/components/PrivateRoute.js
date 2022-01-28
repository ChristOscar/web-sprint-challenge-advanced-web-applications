import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute() {
  const {component:Component, ...rest} = props;
  return (<Route {...props} render={()=>{
    if(localStroage.getItem('token')){
      return <Component />;
    } else {
      return <Redirect to='/' />;
    }
  }}/>);
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute