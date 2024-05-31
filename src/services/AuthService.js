
// function LoginService(a)
// {
//   localStorage.setItem('user',JSON.stringify({...a,'islogin':true}));
//   return  JSON.parse(localStorage.getItem('user'));  

import axios from "axios";
import { jwtDecode } from "jwt-decode";

// }
const AUTH_BASE='http://localhost:8080/auth/'
function IsLogedIn()
{
      
      if(localStorage.getItem('token')!==null && localStorage.getItem('token')!==undefined)
      {
            const {islogin}=jwtDecode(localStorage.getItem('token'));
            return islogin;
      }
      else
      {
            return false;
      }
    
}

export function IsAdmin()
{
      
      if(localStorage.getItem('token')!==null && localStorage.getItem('token')!==undefined)
      {
            const {role}=jwtDecode(localStorage.getItem('token'));
            if(role==='seller')
            return true;
      return false;
      }
      else
      {
            return false;
      }
    
}



async function createUser(user)
{

      return await axios.post(AUTH_BASE+'signup',user)
    
}



export async function getProfile()
{
    const token=localStorage.getItem('token');
    return await axios.post(
        AUTH_BASE+"getprofile",
        {

        },
        {
        headers: {
            'token':token
         }}
        
     )
}

export async function updateProfile(profile)
{
    const token=localStorage.getItem('token');
    return await axios.post(
        AUTH_BASE+"updateprofile",
        profile,
        {
        headers: {
            'token':token
         }}
        
     )
}



function LogoutService()
{
      localStorage.clear();
}

async function LoginService(user){

     return await axios.post(AUTH_BASE+'login',user)
}
export {LoginService,IsLogedIn,LogoutService,createUser}; 
