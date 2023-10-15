import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import "./AnimeItem.css"

function AnimeItem() {
    const {id} = useParams();
    
    
    const [anime, setAnime] = useState({});
    const [showMore, setShowMore] = useState(false);

    const getAnime = async (anime) => {
        const response = await fetch(`http://localhost:3000/anime-details/${anime}`);
        const data = await response.json();
        setAnime(data);
    }

    useEffect(() => {
        getAnime(id);
    }, [])

    return (
        <div className="main">
            <div className="overview">
                <img src={anime.animeImg} alt="Anime Image"/>
            </div>

            <div className="details">
                <h1>{anime.animeTitle}</h1>
                <h4>Released On: {anime.releasedDate}</h4>
                <a>Status: {anime.status}</a>
                <a>Type: {anime.type}</a>
                <a>Total Episodes: {anime.totalEpisodes}</a>
                <Link to={`/anime/${id}/watch/1`}>
                    <button>▶ Watch Now</button>
                </Link>
                <p>{showMore ? anime.synopsis : anime.synopsis?.substring(0, 450) + '...'}</p>
                <a className="showmore" onClick={() => {setShowMore(!showMore)}}>{showMore ? "- Less" : "+ More"}</a>
            </div>
        </div>
    )
}

export default AnimeItem