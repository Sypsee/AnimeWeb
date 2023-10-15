import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import "./AnimeEpisode.css"


function AnimeEpisode() {
    const {ep} = useParams();
    const {id} = useParams();

    const [list, setList] = useState(1);
    const [anime, setAnime] = useState({});
    const [episode, setEpisode] = useState({});

    const getEpisode = async (epNum) => {
        const response = await fetch(`http://localhost:3000/vidcdn/watch/${id}-episode-${epNum}`);
        const data = await response.json();
        setEpisode(data);
    }

    const getAnime = async (anime) => {
        const response = await fetch(`http://localhost:3000/anime-details/${anime}`);
        const data = await response.json();
        setAnime(data);
        ep.length > 20 ? setList(ep.length/20) : setList(1);
    }

    useEffect(() => {
        getEpisode(ep);
        getAnime(id);
    }, [ep, id])


    const epList = () => {
        if (!anime.episodesList) return;
        
        return anime.episodesList.map((eps) => {
            return <Link to={`/anime/${id}/watch/${eps.episodeNum}`} key={eps.episodeNum} >
                    <p>{eps.episodeNum}</p>
            </Link>
        })
    }

    return (
        <div>
            <div className="video">
                <iframe title={episode.episodeNum+anime.animeTitle} src={episode.Referer} width="1200px" height="675px" allowFullScreen></iframe>
            </div>
            <div className="list">
                <h1>All Episodes</h1>
                {epList()}
            </div>
        </div>
    )
}

export default AnimeEpisode