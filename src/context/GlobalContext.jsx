// import { useState, useContext, createContext } from "react"
// import axios from "axios"

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    //todo useState dei due componenti

    //todo funzioni di richiamo per le due chiamate axios

    //todo useEffect con i callBack delle due funzioni per settare 
    //todo gli useState reattivi per i "consumers"




    //todo const value = {}
    return (

        <GlobalContext.Provider value={{}}>
            {children}
        </GlobalContext.Provider>

    )
}

//task custom hook 
const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext }




