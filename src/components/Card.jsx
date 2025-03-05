import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Card() {

    const [movies, setMovies] = useState([])

    const api = import.meta.env.VITE_API_KEY
    const url = import.meta.env.VITE_ENDPOINT_URL
    // const auth = import.meta.env.VITE_API_TOKEN

    const options = {
        method: 'GET',
        url: url + "movie?query=batman&include_adult=false&language=en-US&page=1",
        headers: {
            accept: 'application/json',
            Authorization: api
        }
    };


    useEffect(() => {
        axios
            .request(options)
            .then(res => setMovies(res.data.results))
            .catch(err => console.error(err));

    }, [])


    return (

        <div>{
            movies.map(m => {

                return (
                    <div key={m.id} className="card col-4">
                        <img className="card-img-top" src={m.backdrop_path} alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">{m.title}</h4>
                            <p className="card-text">{m.title}</p>
                        </div>
                    </div>

                )
            })
        }

        </div>



    )

}