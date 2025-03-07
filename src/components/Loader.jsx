//task tentativo guidato di un loader rudimentale, da usare in context ed esportare poi 
//task eventualmente nell'if alla chiamata degli array in cardContainer.jsx
//? approccio ad async/await

function Loader({ isLoading }) {
    if (!isLoading) {
        return null;
    }

    return (
        <div className="text-center mt-5">
            <p>Caricamento in corso...</p>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loader;