import { Redirect } from "react-router-dom";
import AuthenticationService from "../../services/Authentication/Authentication";
import React from "react";
import { Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
    const auth = new AuthenticationService()
    return (
        <Route
            {...rest}
            render = { () =>
                auth.isAuthenticated('PrivateRoute') ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/"
                        }}
                    />
                )
            }
        />
    )
}