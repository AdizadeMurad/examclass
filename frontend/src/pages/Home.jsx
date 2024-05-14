import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useState,useEffect } from 'react';
import "./Home.scss"
function Home() {
const [mydata, setmydata] = useState([])


useEffect(() => {
    getAllproducts()
}, [])


async function getAllproducts() {
    const res = await fetch("http://localhost:3000/products")
    const data = await res.json()
    setmydata(data)
}


  return (

<>

      <Helmet>
        <title>Page</title>
        <link rel="canonical" href="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" />
      </Helmet>



<div className='cards'>
{
    mydata.map((x)=> {
      console.log(x);
        return <> 
        <div className='card'>
            <h2>{x.name}</h2>
            <p>{x.surname}</p>
            <p>{x.age}</p>
          </div>  
           </>
   })
}
</div>

</>
  )
}

export default Home