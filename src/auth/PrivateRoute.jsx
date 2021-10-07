import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return localStorage.getItem("accessToken") ? (
          children
        ) : (
          <Redirect to="/auth/signin" />
        );
      }}
    />
  );
};

export default PrivateRoute;
