
import { Routes,Route } from "react-router";
import Appnav from "./components/Appnav";
import Menu from './components/Menu'
import Orders from "./components/Orders";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Jumbotron from "./components/Jumbotron";
import AddProduct from "./components/AddProduct";
import RouteProtect from "./components/RouteProtect";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";

function App() {
   const [isLogin,setLogin]=useState(false);
   useEffect(()=>{
     if(localStorage.getItem('user')!=null)
      {
        setLogin(true);
      }
   },[])
  return (
    <div className="App">
      <Appnav/>
      <Routes>
        <Route path="/" element={<Jumbotron/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Menu" element={
        <RouteProtect redirectTo='/'>
          <Menu/>
        </RouteProtect>}/>
        <Route path="/Orders" element={
        <RouteProtect redirectTo='/'>
          <Orders/>
        </RouteProtect>}/>
        <Route path="/menu" element={
          <RouteProtect redirectTo='/'>
            <Menu/>
          </RouteProtect>}/>
        <Route path="/cart" element={
          <RouteProtect redirectTo='/'>
            <Cart/>
          </RouteProtect>
        }/>
        <Route path="/Profile" element={
          <RouteProtect redirectTo='/'>
            <Profile/>
          </RouteProtect>
        }/>
         <Route path="/AddProduct" element={
          <RouteProtect redirectTo='/'>
            <AddProduct/>
          </RouteProtect>
         }/>
      </Routes>
    </div>
  );
}

export default App;
