// import { useState, useEffect } from "react" //* to=> GlobalContext
import { useGlobalContext } from "../context/GlobalContext"


export default function SearchBar() {

    //task destructuring da GlobalContext
    const { handleInputChange, handleSubmitChange } = useGlobalContext()

    //*cerca film da input
    // const [searchMovie, setSearchMovie] = useState('') //* to=> GlobalContext


    //todo customFunction per settare l'input searchMovie (=>onChange dell'input)
    // const handleInputChange = (e) => {
    //     e.preventDefault()
    //     return (setSearchMovie(e.target.value))
    // }

    // const handleSubmitChange = () => {
    //     e.preventDefault()
    //     return axiosData()
    // } //* to=> GlobalContext


    return (

        <nav
            className=" navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand text-danger fw-bold" href="#">BOOLFLIX</a>

                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <form className="d-flex my-2 my-lg-0" onSubmit={handleSubmitChange}>
                        <input
                            className="form-control me-sm-2"
                            type="text"
                            placeholder="Cerca"
                            onChange={handleInputChange}
                        // value={searchMovie}
                        />

                        {/* //todo! select con input da passare come film/serieTV */}
                        {/* <select name="" id="">
                                <option value="" ></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select> */}

                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Cerca
                        </button>
                    </form>
                </div>
            </div>
        </nav >

    )

}