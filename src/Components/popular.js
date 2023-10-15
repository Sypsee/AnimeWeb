import { useGlobalContext } from "../Context/global";
import { Link } from "react-router-dom";
import "./popular.css"

function Popular() {
    const { popularAnime, isSearch } = useGlobalContext();

    const conditionalRender = () => {
        if (!isSearch) {
            return popularAnime.map((anime) => {
               return <Link to={`/anime/${anime.animeId}`} key={anime.animeId}>
                    <img src={anime.animeImg} alt="Anime Thumbnail"/>
                    <p>{anime.animeTitle}</p>
               </Link>
            })
        }
    }

    return (
        <div>
            <h1>Popular Anime</h1>
            <div className="popular-anime">
                {conditionalRender()}
            </div>
        </div>
    )
}

export default Popular;