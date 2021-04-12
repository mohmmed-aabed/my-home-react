import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserContext } from '../context/user_context';

// ------------------ PAGE ------------------
const PrivateRoute = () => {
  return <h4>Private Route</h4>;
};

// ------------------ EXPORT ------------------
export default PrivateRoute;
