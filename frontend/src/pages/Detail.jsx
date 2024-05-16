import React from "react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [mydata, setmydata] = useState([]);
  const { id } = useParams();

  async function getAllproducts() {
    const res = await fetch("http://localhost:3000/products/" + id);
    const data = await res.json();
    return data
  }

  async function datalars() {
    const datalar = await getAllproducts(id)
    setmydata(datalar)
  }

  useEffect(() => {
  datalars()
  }, []);


  return (
    <>
      <Helmet>
        <title>Page</title>
        <link
          rel="canonical"
          href="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
        />
      </Helmet>

      <div className="cards">
          <div className="card">
            <h2>{mydata.name}</h2>
            <p>{mydata.surname}</p>
            <p>{mydata.age}</p>
          </div>
      </div>
    </>
  );
}

export default Detail;
