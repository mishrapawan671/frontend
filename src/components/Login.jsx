import React from 'react'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/AuthReducer';

function Login() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  function submithandler(event)
  {
    event.preventDefault();
     const user={"username":event.target.email.value, "password":event.target.password.value}
     dispatch(loginAction(user))
     .then(()=>{
      console.log('navigate to menu')
      navigate('/menu')},(erro)=>console.log(erro))     ;

  }
  return (
    <div className='container'>
    <form onSubmit={submithandler}>
        <div class="form-group mt-2 ">
          <label for="EMAIL"><h1>Login</h1></label>
          <input type="email" class="form-control " style={{background:"rgb(237, 230, 166)"}} name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group mt-2 ">
          <input type="password" class="form-control" style={{background:"rgb(237, 230, 166)"}} name="password" placeholder="Password"/>
        </div>
        <button type="submit" class="btn btn-secondary    mt-2">Login</button>
 </form>
    </div>
  )
}

export default Login