import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                return !localStorage.getItem("accessToken") ? (
                    <Redirect to="/auth/signin" />
                ) : (
                    children
                );
            }}
        />
    );
};