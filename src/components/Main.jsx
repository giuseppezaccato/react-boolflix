//task hooks
import { useState, useEffect } from "react";
import axios from "axios";

//task components
import Card from "./Card";

//task context

export default function Main() {
    const [movies, setMovies] = useState()

    return (
        <div className="container my-5">
            <Card />
        </div>
    )

}
