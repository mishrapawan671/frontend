import  axios, { AxiosHeaders }  from "axios"

const AUTH_BASE='http://localhost:8080/product'

export async function Addproducts(formdata)
{
    const token=localStorage.getItem('token');
    return await axios.post(
        AUTH_BASE+"/addproducts",
        formdata   ,
        {
        headers: {
            'token':token
         }}
        
     )
   
    

}
