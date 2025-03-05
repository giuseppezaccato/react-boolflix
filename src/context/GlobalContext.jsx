import { useState, useContext, createContext } from "react"
import axios from "axios"

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    //todo useState dei due componenti
    const [movies, setMovies] = useState([]) //* movies
    const [searchMovie, setSearchMovie] = useState('') //* inputSearch

    //todo import dotEnv
    // const api = import.meta.env.VITE_API_KEY
    const url = import.meta.env.VITE_ENDPOINT_URL
    const auth = import.meta.env.VITE_API_TOKEN

    //2 funzioni handle nella SearchBar 
    const handleInputChange = (e) => setSearchMovie(e.target.value) //*onChange

    const handleSubmitChange = (e) => {
        e.preventDefault()
        axiosMovies()
    } //* onSubmit

    //options
    const options = {
        method: 'GET',
        url: url + `movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${auth}`
        }
    };

    //todo funzioni di richiamo per le due chiamate axios
    //searchMovies
    const axiosMovies = () => {
        axios
            .request(options)
            .then(res => setMovies(res.data.results))
            .catch(err => console.error(err));
    }

    //searchSeries
    // const axiosSeries = () => {
    //     axios
    //         .request(options)
    //         .then(res => setMovies(res.data.results))
    //         .catch(err => console.error(err));
    // }


    const value = {
        movies,
        handleInputChange,
        handleSubmitChange,
        axiosMovies
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




