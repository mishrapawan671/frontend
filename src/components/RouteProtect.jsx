import React from 'react'
import { Navigate, useParams } from 'react-router';
import { IsLogedIn } from '../services/AuthService';


function RouteProtect({children,redirectTo}) {
   
  const par=useParams();
  console.log(par);
  return IsLogedIn()?children:<Navigate to={redirectTo}/>
}

export default RouteProtect