import SearchBar from "./SearchBar";




export default function Header() {


    return (
        <header className="d-flex justify-content-between align-items-center mx-5">
            <a className="navbar-brand text-danger" href="#">BOOLFLIX</a>

            <SearchBar />
        </header>
    )

}