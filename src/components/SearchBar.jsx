
export default function SearchBar() {

    return (

        <nav
            class=" navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand text-danger fw-bold" href="#">BOOLFLIX</a>
                <button
                    class="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <form class="d-flex my-2 my-lg-0">
                        <input
                            class="form-control me-sm-2"
                            type="text"
                            placeholder="Search"
                        />
                        {/* //todo! select con input da passare come film/serieTV */}
                        {/* <select name="" id="">
                                <option value="" ></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select> */}

                        <button
                            class="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    )

}