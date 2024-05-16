import { useState, createContext } from "react";

export const MainContext = createContext();

function MainProvider({ children }) {
  const [basket, setbasket] = useState([]);

  function inc(items) {
    const index = basket.findIndex((x) => x.id === items.id);
    if (index !== -1) {
      basket[index].count++;
      setbasket([...basket]);
    } else {
      setbasket([...basket, { ...items, count: 1 }]);
    }
  }

  function RemoveBasket(item) {
    setbasket(basket.filter((x) => x._id !== item._id));
  }

  function dec(items) {
    const index = basket.findIndex((x) => x.id === items.id);
    const num = basket[index];
    if (num.count > 1) {
      basket[index].count--;
      setbasket([...basket]);
    }
  }


  function getTotalCount(item) {
    return basket.find((x)=>x.id===item.id).count
  }

  function getTotal() {
    return basket.reduce((prev,initial)=>prev+(initial.count*initial.age),0).toFixed(2)
  }


function isExist(item) {
 return basket.findIndex((x) => x.id === item.id) !== -1
}
  


  return (
    <>
      <MainContext.Provider value={{ getTotal,basket,getTotalCount, setbasket, inc, RemoveBasket,isExist ,dec}}>
        {children}
      </MainContext.Provider>
    </>
  );
}

export default MainProvider;


