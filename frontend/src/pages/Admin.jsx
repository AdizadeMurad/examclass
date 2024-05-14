import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import "./Admin.scss"
import { Link } from 'react-router-dom';
function Admin() {
  const [mydata, setmydata] = useState([])


  useEffect(() => {
    getAllproducts()
  }, [])


  async function getAllproducts() {
    const res = await fetch("http://localhost:3000/products")
    const data = await res.json()
    setmydata(data)
  }

  async function handleDelete(id) {
    const res = await fetch("http://localhost:3000/products/"+id,{
      method:"delete"
    });
    const data = await res.json();
    return getAllproducts();
  }



  return (
    <>


      <Helmet>
        <title>Page</title>
        <link rel="canonical" href="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" />
      </Helmet>




      <h2>AdminPanel</h2>

      {
        mydata.map((x) => {
          return <>
            <table>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Opinion</th>
              </tr>
              <tr>
                <td>{x.name}</td>
                <td>{x.surname}</td>
                <td>{x.age}</td>
                <td>
                  <Link><button onClick={()=>handleDelete(x._id)}>Delete</button></Link>
                 <button> <Link to={`/UptadeProduct/${x._id}`}>Edit</Link></button>

                </td>
              </tr>
            </table>


          </>
        })
      }


    </>
  )
}

export default Admin