
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

function LogoutService()
{
      localStorage.clear();
}

async function LoginService(user){

     return await axios.post(AUTH_BASE+'login',user)
}
export {LoginService,IsLogedIn,LogoutService}; 
