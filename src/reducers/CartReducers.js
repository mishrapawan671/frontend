
function AddtoCart(a)
{
    return{
        type:'Add',
        payload:a

    }
}
function removeFromCart(a)
{
    return{
        type:'Remove',
        payload:a
    }
}


const intialState={itemList:[]}

function CartReducer(state=intialState,action)
{
    switch (action.type) {
        case "add":
            return state.itemlist.push(action.payload)
            
        case "remove":
            return state.itemList.filter((a)=>a.name!==action.payload.name)
    
        default:
            return state;
    }
     
}

export { AddtoCart,removeFromCart,CartReducer}
