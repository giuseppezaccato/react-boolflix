// import axios from 'axios'; //* to=> GlobalContext
import { useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

//*LOADER
// import Loader from './Loader';

export default function Card() {

    //task destructuring da GlobalContext
    const { axiosData,
        movies,
        series,
        // isLoading //*LOADER
    } = useGlobalContext() //? => from GlobalContext

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

    //*LOADER
    // if (isLoading) {
    //     return <Loader />
    // }

    useEffect(() => {

        axiosData() //? => from GlobalContext

        // axios
        //     .request(options)
        //     .then(res => setMovies(res.data.results))
        //     .catch(err => console.error(err)); //* to=> GlobalContext
    }, [])

    //task custom per stampa stelle
    const letStarsShine = (avg) => {
        const conversion = Math.ceil(avg / 2)
        const fullStar = "★"
        const emptyStar = "☆"
        const full = fullStar.repeat(conversion)
        const empty = emptyStar.repeat(5 - conversion)

        if (conversion == 0) {
            return "0 stars! 🫥"
        } else {
            return full + empty
        }
    }


    return (
        <>
            <h2 className="text-start my-3">FILM</h2>
            <div className='row row-cols-4 '>{
                movies.map(m => {
                    return (
                        <div key={m.id} className=" mx-auto carta p-1" >
                            <img className="card-img-top carta-img" src={baseImg + "w342/" + m.poster_path} alt={m.name} />
                            <div className="card-body info">
                                {/* <h4 className="card-title">{m.title}</h4> */}
                                <h4 className="card-title">{m.original_title}</h4>
                                <p className="card-text">{letStarsShine(m.vote_average)}</p>
                                <p className="card-text">{m.overview}</p>

                                {/* <p className="card-text">{m.original_language}</p> */}
                                {/* //task doppio ternario per stampare flag ja e en mancanti */}
                                <span className={`fi fi-${m.original_language == "en" ? "gb"
                                    : m.original_language == "ja" ? "jp"
                                        : m.original_language}`} > </span>
                            </div>
                        </div>

                    )
                })
            }

            </div >

            <h2 className="text-start my-3" >SERIE TV</h2>
            <div className='row row-cols-4 '>{
                series.map(s => {
                    return (
                        <div key={s.id} className=" mx-auto  p-1 carta" >
                            <img className="card-img-top carta-img" src={baseImg + "w342/" + s.poster_path} alt={s.name} />
                            <div className="card-body info">
                                {/* <h4 className="card-title">{s.name}</h4> */}
                                <h4 className="card-title">{s.original_name}</h4>
                                {/* <h5 className='card-title'>{m.original_name} </h5> */}
                                <p className="card-text">{s.overview}</p>
                                <p className="card-text">{letStarsShine(s.vote_average)}</p>
                                {/* <p className="card-text">{s.original_language}</p> */}
                                <span className={`fi fi-${s.original_language == "en" ? "gb"
                                    : s.original_language == "ja" ? "jp"
                                        : s.original_language}`} > </span>

                            </div>
                        </div>

                    )
                })
            }

            </div>
        </>



    )

}