import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {
    return(
        <button className="main-reload-button" onClick={props.reloadMovies}>Vrátit vše</button>
    )
}

export default ReloadMovieButton