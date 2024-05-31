import React from 'react'
import { useLinkClickHandler } from 'react-router-dom'

export default function TableRow({row,editButtonHandler}) {


    function clickHandler(event)
    {
        editButtonHandler(row);
    }


  return (
    <tr className='table-striped ' id>
    <th className='table-light fs-5 text-align align-middle'>{row.name}</th>
    <th className='table-light fs-5'><img className='rounded-3 w-25  ' alt='product' src={'http://localhost:8080/'+row.img}/></th>
    <th className='table-light fs-5 text-align align-middle'>{row.price} $</th>
    <th className='table-light fs-5 text-align align-middle'>{row.quantity} units</th>
    <th className='table-light fs-5 text-align align-middle'><button className='btn btn-secondary' onClick={clickHandler} >edit</button></th>
    </tr>
  )
}
