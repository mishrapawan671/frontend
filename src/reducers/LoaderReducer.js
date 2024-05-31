import React from 'react'



const initalState=false;

function TurnLoaderOn()
{
    return{
        type:"Loading",
        payload:true

    }
}

function TurnLoaderoff ()
{
    return{
        type:"complete",
        payload:false

    }
}


function LoaderReducer(state=initalState,action) {
 
    switch (action.type) 
    {
        case "loading":
          return  true;

        case "complete":
            return false
       
        default:
            return false;

    }
}

export default LoaderReducer