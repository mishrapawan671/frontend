import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import loadMenu from '../services/MenuService'
function Menu() {
   const [menuData,setMenuData]=useState([]);
   useEffect(()=>{
    loadMenu()
    .then(res=>{
      setMenuData(res.data);

    },error=>console.log(error)

    )},[])
    console.log(menuData)
  return (
    <div className='container '>
    <h4>Menu</h4>
    <div className='container m-0 p-0 d-flex flex-col flex-wrap justify-content-center  '>
      {menuData.length!==0 ? menuData.map(data=><Cards data={data} key={data.id}/>):"" }
      
      
    </div>
    </div>
  )
}

export default Menu