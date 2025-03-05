// import axios from 'axios'; //* to=> GlobalContext
import { useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext';


export default function Card() {

    //task destructuring da GlobalContext
    const { axiosMovies, movies } = useGlobalContext()

    //task import
    const baseImg = import.meta.env.VITE_IMG_BASE_URL


    // const [movies, setMovies] = useState([]) //* to=> GlobalContext

    // const api = import.meta.env.VITE_API_KEY
    // const url = import.meta.env.VITE_ENDPOINT_URL
    // const auth = import.meta.env.VITE_API_TOKEN //* to=> GlobalContext

    // const options = {
    //     method: 'GET',
    //     url: url + "movie?query=batman&include_adult=false&language=en-US&page=1",
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: `Bearer ${auth}`
    //     }
    // }; //* to=> GlobalContext


    useEffect(() => {
        axiosMovies()

        // axios
        //     .request(options)
        //     .then(res => setMovies(res.data.results))
        //     .catch(err => console.error(err)); //* to=> GlobalContext
    }, [])


    return (

        <div className='row row-cols-4 gap-3 mx-auto'>{
            movies.map(m => {
                return (
                    <div key={m.id} className="card mx-auto" >
                        <img className="card-img-top" src={baseImg + "w342/" + m.poster_path} alt={m.name} />
                        <div className="card-body">
                            <h4 className="card-title">{m.title}</h4>
                            <h4 className="card-title">{m.original_title}</h4>
                            {/* <h5 className='card-title'>{m.original_name} </h5> */}
                            <p className="card-text">{m.original_language}</p>
                            <p className="card-text">{m.vote_average}</p>

                        </div>
                    </div>

                )
            })
        }

        </div>



    )

}