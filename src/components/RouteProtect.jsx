import React from 'react'
import { Navigate } from 'react-router';
import { IsLogedIn } from '../services/AuthService';


function RouteProtect({children,redirectTo}) {
   
  return IsLogedIn?children:<Navigate to={redirectTo}/>
}

export default RouteProtect