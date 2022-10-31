import { render } from "@testing-library/react";
import { Component } from "react";
import { Navigate } from "react-router-dom";



export const withAuthRedirect = (Component) => (props) => {
  if (!props.isAuth) return <Navigate to="/login" />
  return <Component {...props} />




}

  
  
  
  