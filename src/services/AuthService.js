
function LoginService(a)
{
     localStorage.setItem('user',a);
}

function IsLogedIn()
{
      const user=localStorage.getItem('user');
      return user!==null ? true:false;
}

function LogoutService(a)
{
      localStorage.clear();
}

export {LoginService,IsLogedIn,LogoutService}; 
