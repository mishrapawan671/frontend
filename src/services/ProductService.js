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

export async function UpdateProduct(formdata)
{
    const token=localStorage.getItem('token');
    return await axios.post(
        AUTH_BASE+"/update",
        formdata   ,
        {
        headers: {
            'token':token
         }}
        
     )
}

export async function DeleteProduct(formdata)
{
    const token=localStorage.getItem('token');
    return await axios.post(
        AUTH_BASE+"/delete",
        formdata   ,
        {
        headers: {
            'token':token
         }}
        
     )
}
