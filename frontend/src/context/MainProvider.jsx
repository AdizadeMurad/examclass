
import { useState,createContext } from 'react'

export const MainContext = createContext()

function MainProvider({ children }) {
const [basket, setbasket] = useState([])


function AddBasket(item) {
    setbasket([...basket,item])
}

function RemoveBasket(item) {
  setbasket(basket.filter((x)=>x._id!==item._id))
}


    return (
        <>
            <MainContext.Provider value={{basket,setbasket,AddBasket,RemoveBasket}}>
                {children}
            </MainContext.Provider>
        </>
    )
}

export default MainProvider








// function inc(item) {
// const index = basket.findIndex((x)=>x._id===item._id)
// if (index!== -1) {
//     setbasket({...basket},item)
    
// }
    
