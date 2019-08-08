import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component,  ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />}
        />
    )
}

function isLoggedIn(){
  console.log(localStorage.getItem('jwtToken'));
  return localStorage.getItem('jwtToken');
}

export default PrivateRoute;