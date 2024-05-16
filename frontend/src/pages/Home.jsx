import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { MainContext } from "../context/MainProvider";

function Home() {
  const [mydata, setmydata] = useState([]);

  const { inc, isExist,dec,RemoveBasket } = useContext(MainContext);

  useEffect(() => {
    getAllproducts();
  }, []);

  async function getAllproducts() {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    setmydata(data);
  }

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
        {mydata.map((x) => {
          return (
            <>
              <div className="card" key={x._id}>
                <h2>{x.name}</h2>
                <p>{x.surname}</p>
                <p>{x.age}</p>



                {isExist(x) ? (
                  <>
                    <button onClick={() => inc(x)}>+</button>
                    <br />
                    <b>count:{x.count}</b>
                    <br />
                    <button onClick={() => dec(x)}>-</button>
                    <br />
                    <button onClick={() => RemoveBasket(x)}>Remove</button>
                  </>
                ) : (
               <>
                  <button onClick={() => inc(x)}>Add Basket</button>  
               </>
                )}

                <button>
                  <Link to={`/DetailPage/${x._id}`}>DetailPage</Link>
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
