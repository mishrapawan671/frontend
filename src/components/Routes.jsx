import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Orders from "./Orders";


const router = createBrowserRouter([
  {
    path: "",
    element: <App />, 
    

  },
  {
    path: "/Orders",
    element: <Orders/>, 
    
  }
]);
export default router;

