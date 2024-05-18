import { jwtDecode } from "jwt-decode"
import { LoginService } from "../services/AuthService"

const intialState={type:'logout',payload:{'islogin':false}}
function loginAction(loginDetail)
{ 
   
    return async(dispatch,getstate)=>{
         
        try{   
        const res=await LoginService(loginDetail)
        localStorage.setItem('token',res.headers['token'])
         
        }
        catch(error)
        {
            throw error;
        }
        
          
        const user=jwtDecode(localStorage.getItem('token'))

          dispatch({
        type:'login',
        payload:{...user,'islogin':true} })


    }
}
function LogoutAction()
{
    return async(dispatch,getstate)=>{
        localStorage.clear();
        dispatch({
        type:'logout',
        payload:{'islogin':false}
    })}
}



function LoginLogoutReducer(state=intialState,action)
{
     
    switch (action.type) {
        case "login":
            console.log({...action.payload,'message':"login action"});
            return{...state,payload:action.payload}
            
        case "logout":
            console.log({...action.payload,'message':"logout action"});
            return{...state,payload:action.payload}
    
        default:
            return state;
    }
     
}


export {loginAction,LogoutAction,LoginLogoutReducer}
