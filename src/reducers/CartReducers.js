
function AddtoCart(a)
{
    return{
        type:'add',
        payload:a

    }
}
function removeFromCart(a)
{
    return{
        type:'remove',
        payload:a
    }
}
function Removeall()
{
    return{
        type:'Removeall',
        payload:[]
    }
}




const intialState={products:[]}

function CartReducer(state=intialState,action)
{
    
    switch (action.type) {
        case "add":
            const {id,name,price,img}=action.payload;
            if(state.products.length===0)
            {
                
                const newproduct={id,name,price,img,count:1};
                return{...state,products:[...state.products,newproduct]}
                
            }
            else
            {
                const {id,name,price,img}=action.payload;

                const index=state.products.findIndex(product=>product.id===id);
                if(index<0)
                {
                    const newproduct={id,name,price,img,count:1};
                    return{...state,products:[...state.products,newproduct]}
                }

                const updatedProducts=state.products.map(product=>{
                    if(product.id===id)
                    {
                        return{...product,count:product.count+1}
                    }
                    else
                    {
                        return product;
                    }

                 })
                
             return {...state,products:updatedProducts }  
            }          
            
        case "remove":{
            const {id}=action.payload;
            return {...state,
                products:state.products.map(product=>product.id===id && product.count>1?
                    {...product,count:product.count-1}:product)
                    .filter(product=>product.id!==id || product.count>0)
             } 
        }

        case 'Removeall':{
            return {...state,
                products:[]
             }

        }
        default:
            return state;
    }
     
}

export { AddtoCart,removeFromCart,CartReducer,Removeall}
