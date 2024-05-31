import axios  from "axios";

const AUTH_BASE='http://localhost:8080/upload/'
export async function uploadSinglefile(file)
{
    const token=localStorage.getItem('token');
    return await axios.post(
        AUTH_BASE+"/uploadimage",
        file   ,
        {
        headers: {
            'token':token
         }}
        
     )
}
