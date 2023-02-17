import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';
import { Navigate } from 'react-router-dom';



const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to='/' />
  }
  return children;
};
export default PrivateRoute;
