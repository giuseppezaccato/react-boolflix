import {
    useState,
    // useEffect, //* LOADER
    useContext,
    createContext
} from "react"
import axios from "axios"

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    //task useState dei componenti
    const [movies, setMovies] = useState([]) //* movies
    const [series, setSeries] = useState([]) //* series 
    const [searchQuery, setSearchQuery] = useState('') //* inputSearch
    // const [isLoading, setIsLoading] = useState(false)//* LOADER da renderizzare in CardContainer


    //task import dotEnv
    // const api = import.meta.env.VITE_API_KEY
    const url = import.meta.env.VITE_ENDPOINT_URL
    const auth = import.meta.env.VITE_API_TOKEN

    //task 2 funzioni handle della SearchBar 

    // //*onChange
    const handleInputChange = (e) => setSearchQuery(e.target.value)
    //questo lo sposto qui per avere accesso a setSearchQuery e toglierlo completamente dalla SearcBar

    //* onSubmit
    const handleSubmitChange = (e) => {
        e.preventDefault()
        axiosData()
    }


    //todo funzioni di richiamo per le due chiamate axios
    //searchQuery Movies + Series
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

    // esempio endpoint con api e non auth! + //* LOADER toFix
    // https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

    //! la soluzione potrebbe essere unire questa richiesta con axiosData() 
    //fix ((sostituire semplicemente fetchData con axiosData))
    //! ed esportarla con l'async incorporato nello useEffect di CardContainer

    // //* useEffect per la gestione stato e logica del LOADER in async
    // useEffect(() => {
    //     async function fetchData() {
    //         setIsLoading(true); //? Inizio Loading
    //         try {
    //             const moviesResponse = await axios.get(`${api}movie?api_key=${api}&language=it_IT&query=${searchQuery}`);
    //             setMovies(moviesResponse.data.results);

    //             const seriesResponse = await axios.get(`${api}tv?api_key=${api}&language=it_IT&query=${searchQuery}`);
    //             setSeries(seriesResponse.data.results);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         } finally {
    //             setIsLoading(false); //? Termino Loading
    //         }
    //     }
    //     fetchData();
    // }, []);


    //task valori da esportare con customHook => useGlobalContext

    const value = {
        movies,
        series,
        handleInputChange,
        handleSubmitChange,
        axiosData,
        // isLoading //*LOADER
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




