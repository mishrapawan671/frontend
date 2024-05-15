function loginAction(a)
{
    return{
        type:'login',
        payload:a

    }
}
function LogoutAction()
{
    return{
        type:'Logout',
        payload:null
    }
}


const intialState={type:'logout',payload:null}

function LoginLogoutReducer(state=intialState,action)
{
    switch (action.type) {
        case "login":
            console.log(action.payload);
            return{...state,payload:action.payload}
            
        case "logout":
            console.log(action.payload);
            return{...state,payload:null}
    
        default:
            return state;
    }
     
}



export {loginAction,LogoutAction,LoginLogoutReducer}
