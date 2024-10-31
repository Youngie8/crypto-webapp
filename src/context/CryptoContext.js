import { createContext, useState } from "react"



// Creatae context Objext
export const CryptoContext = createContext({})

// Create the provider component
export const CryptoProvider = ({children}) => {
    const [test, setTest] = useState("This is test state");
    return(
        <CryptoContext.Provider value={{ test }}>
            {children}
        </CryptoContext.Provider>
    )
}