import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Jumbotron() {

  const navigate=useNavigate();
  return (
    <div className='container d-flex justify-content-center ' style={{backgroundColor:"RGB(227, 225, 232)"}}>
    <div className="vw-100 p-5 rounded-lg m-3 h-80 " >
        <div></div>
        <h1 className="display-4">Pizza Delivery!</h1>
        <p className="lead">Welcome tp pizza delivery service. This is the place when you may chose
        the most delicious pizza you like from wide varity of options!</p>
        <hr className="my-4" />
        <p>
            We're perofrming delivery free of charge if your order is heigher then $20
        </p>    
        
        <div className='btn btn-secondary btn-lg btn-block align-content-center w-100  ' onClick={()=>navigate('/Login')} >Signin and order</div>
    </div>
    </div>
  )
}

export default Jumbotron