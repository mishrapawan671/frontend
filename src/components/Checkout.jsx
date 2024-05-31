
import { useDispatch, useSelector } from "react-redux"
import { placeOrder } from "../services/OrderService";
function Checkout()
{
  const productList=useSelector(state=>state.CartReducer.products)
  const dispatch=useDispatch();
  const total=productList.length>0 ? 
   productList.reduce((pre=0,product)=>pre+(product.price*product.count),0) :0
  
  function submitHandler(e)
  {
    e.preventDefault();
    if(total>0)
    {
       placeOrder(productList)
    .then(res=>{
      if(res.status===200 )
        {
          alert("order placed");
          dispatch()

        }
        else
        {
          alert("something wen wrong");
        }
    })

    }
    else
    {
      alert("order value should be greter than $0")
    }
   
    

  }

  
 return(
  <div className="container">
  <form>
  <h1>Checkout</h1> 
  <div className="form-group ">
    <label for="exampleInputEmail1">Credit Card</label>
    <input type="creditCard" class="form-control mt-1 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="16 digit credit card number"/>
  </div>
  <div className=" mt-4 font-weight-bold ">
    <label >Order Total:${total}</label>
  </div>
  <button type="submit" class="btn btn-dark mt-2 " onClick={submitHandler}>Checkout</button>
 </form>
 </div>
    )
}
export default Checkout;