import React from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainProvider";

function Basket() {
  const { getTotal,basket,inc,dec,RemoveBasket ,getTotalCount} = useContext(MainContext);

  return (
    <>
      <div className="cards">
        {basket.map((x) => {
          return (
            <>
              <div className="card" key={x._id}>
                <h2>{x.name}</h2>
                <p>{x.surname}</p>
                <p>{x.age}</p>
                <button onClick={()=>inc(x)}>+</button>
                <br />
                <b>count:{getTotalCount(x)}</b>
                <br />
                <button onClick={()=>dec(x)}>-</button>
                <br />
                <button onClick={() => RemoveBasket(x)}>Remove</button>
              </div>

              <div>Total:{getTotal()}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Basket;
