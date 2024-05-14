import React, { createContext } from 'react'

export const MainContext = createContext()

function MainProvider({ children }) {
const [basket, setbasket] = useState([])



function addbasket() {

    
}

    return (
        <>
            <MainContext.Provider>
                {children}
            </MainContext.Provider>
        </>
    )
}

export default MainProvider