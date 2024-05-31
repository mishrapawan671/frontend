
import axios from 'axios'
const BASE_URL='http://localhost:8080'

async function loadMenu()
{
 const token=localStorage.getItem('token');
  return await axios.get(BASE_URL+"/menu",{

    headers:{
        token:token
    }
    
  })
}

export default loadMenu;