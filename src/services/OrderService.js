
import axios from 'axios';
import { getProfile } from './AuthService';

const AUTH_BASE='http://localhost:8080/order'

export async function placeOrder(cartData)
{
    
    const {data} = await getProfile();

    const total=cartData.length>0 ? cartData.reduce((pre=0,product)=>pre+(product.price*product.count),0) :0

    const orderData={username:data.email,firstname:data.firstname,lastname:data.lastname,address:data.address,email:data.email,items:cartData,totalBillAmount:total}

    const token=localStorage.getItem('token');
    return await axios.post(
        AUTH_BASE+"/addOrder",
        orderData ,
        {
        headers: {
            'token':token
         }}
        
     )
}



export async function GetAllOrder()
{
    

    const token=localStorage.getItem('token');
    return await axios.post(
        AUTH_BASE+"/showOrders",
        {

        },
        {
        headers: {
            'token':token
         }
        }
        
     )
}


export async function changeStatus(orderDetail)
{
    const token=localStorage.getItem('token');
    return await axios.post(
        AUTH_BASE+"/changeStatus",
        orderDetail,
        {
        headers: {
            'token':token
         }
        }
        
     )
}