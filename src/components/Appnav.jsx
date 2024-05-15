
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import logo from '../images/logo.jpeg'
import { IsLogedIn } from '../services/AuthService';


function Appnav({islogin,setLogin}) {

  return (
   <div className='container sticky-md-top  d-md-flex flex-md-row bg-black vh-30 bg-body-tertiary  mt-4 mb-4 '>
    <div className="container d-md-flex flex-md-row flex-justify-content-center ">
      <div className='nav-item'><img style={{height:100}} src={logo} alt="logo"></img></div>
    </div>
    <div className="container d-md-flex flex-md-row justify-content-end  ">
         {islogin && <><div className='align-content-center me-3'><Link to='/' className='nav-item col text-secondary text-decoration-none '>Menu</Link></div>
           <div className='align-content-center me-3 '><Link to='/cart' className='nav-item col text-secondary text-decoration-none'>Cart</Link></div>
           <div className='align-content-center me-3 '><Link to='/profile' className='nav-item col text-secondary text-decoration-none'>Profile</Link></div>
           <div className='align-content-center me-3 '><Link to='/AddProduct' className='nav-item col text-secondary text-decoration-none'>add product</Link></div>
           <div className='align-content-center me-3 '><Link to='/Orders' className='nav-item col text-secondary text-decoration-none'>Orders</Link></div></>}
          { !IsLogedIn() &&<div className='align-content-center me-3 '>
            <Link to='/SignUp'className='nav-item col ps-2 pe-2 pt-1 pb-1 rounded-1 border border-dark text-secondary text-decoration-none'>Sign Up</Link> 
            </div>}
          {!IsLogedIn() ? <div className='align-content-center me-3 '>
             <Link to='/Login' className='nav-item col text-secondary ps-2 pe-2 pt-1 pb-1  rounded-1  border border-dark text-decoration-none'>Login</Link>
             </div> 
          : <div className='align-content-center me-3 '>
            <Link to='/Logout'className='nav-item col ps-2 pe-2 pt-1 pb-1 rounded-1 border border-dark  text-secondary text-decoration-none'>Logout</Link>
            </div>}
           
    
    </div>
  </div>
  
  )
}

export default Appnav