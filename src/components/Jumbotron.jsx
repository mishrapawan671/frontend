import React from 'react'
import { Link } from 'react-router-dom'

function Jumbotron() {
  return (
    <div className='container d-flex justify-content-center ' style={{backgroundColor:"RGB(227, 225, 232)"}}>
    <div className="vw-100 p-5 rounded-lg m-3 h-75 " >
        <div></div>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>
            It uses utility classes for typography and spacing to space content out within the larger container.
        </p>    
        
        <div className='btn btn-secondary btn-lg btn-block align-content-center w-100' ><Link className='text-decoration-none text-light  ' to='/Login'>Signin and order </Link></div>
    </div>
    </div>
  )
}

export default Jumbotron