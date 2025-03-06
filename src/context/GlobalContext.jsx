import { useState, useContext, createContext } from "react"
import axios from "axios"

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    //todo useState dei due componenti
    const [movies, setMovies] = useState([]) //* movies
    const [series, setSeries] = useState([]) //* series 
    const [searchQuery, setSearchQuery] = useState('') //* inputSearch

    //todo import dotEnv
    // const api = import.meta.env.VITE_API_KEY
    const url = import.meta.env.VITE_ENDPOINT_URL
    const auth = import.meta.env.VITE_API_TOKEN

    //2 funzioni handle nella SearchBar 
    const handleInputChange = (e) => setSearchQuery(e.target.value) //*onChange
    //questo lo sposto qui per avere accesso a setSearchQuery e toglierlo completamente dalla SearcBar

    const handleSubmitChange = (e) => {
        e.preventDefault()
        axiosData()
    } //* onSubmit


    //todo funzioni di richiamo per le due chiamate axios
    //searchQuerys + Series
    const options = {
        method: 'GET',
        url: url + `movie?query=${searchQuery}`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${auth}`
        }
    };

    const axiosData = () => {

        axios
            .request(options)
            .then(res => setMovies(res.data.results))
            .catch(err => console.error(err));

        options.url = url + `tv?query=${searchQuery}`

        axios
            .request(options)
            .then(res => setSeries(res.data.results))
            .catch(err => console.error(err));

    }

    //searchSeries
    // const axiosSeries = () => {

    //     axios
    //         .request(options)
    //         .then(res => setMovies(res.data.results))
    //         .catch(err => console.error(err));
    // }

    //task valori da esportare con customHook => useGlobalContext
    const value = {
        movies,
        series,
        handleInputChange,
        handleSubmitChange,
        axiosData

    }


    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>

    )
}

//task custom hook 
const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext }




