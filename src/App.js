import { Routes , Route} from 'react-router-dom'
import Appnav from "./components/Appnav";
import Menu from './components/Menu'
import Orders from "./components/Orders";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Jumbotron from "./components/Jumbotron";
import RouteProtect from "./components/RouteProtect";
import Checkout from "./components/Checkout";
import Admindashboard from "./components/Admindashboard"



function App() {
  return (
    <div className="App">
      <Appnav />
      <Routes>
        <Route path="/" element={ <Jumbotron/>}/>
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
         <Route path="/Admin" element={
          <RouteProtect redirectTo='/'>
            <Admindashboard/>
          </RouteProtect>
          
         }/>
         <Route path="/Checkout" element={
          <RouteProtect redirectTo='/'>
            <Checkout/>
          </RouteProtect>
          
         }/>

      </Routes>
    </div>
  );
}

export default App;
