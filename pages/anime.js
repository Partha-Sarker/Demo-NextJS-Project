import AnimeItem from '../components/AnimeItem'
import CreateAnimeItem from "../components/CreateAnimeItem";
import {useEffect, useState} from "react";

export default function Anime() {
    const [animeItemDB, setAnimeItemDB] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/anime').then(res => res.json()).then(data => setAnimeItemDB(data))
    }, [])

    function addAnimeToDB(anime) {
        fetch('http://localhost:8080/anime', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(anime),
        })
            .then(response => response.json())
            .then((anime) => {
                setAnimeItemDB([...animeItemDB, anime])
            })
    }

    function deleteAnimeFromDB(id) {
        fetch('http://localhost:8080/anime/' + id, {method: 'DELETE'})
            .then(response => {
                response.ok && setAnimeItemDB(animeItemDB.filter(anime => id !== anime.id))
            })
    }

    function updateAnime(anime) {
        fetch('http://localhost:8080/anime', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(anime),
        })
            .then(response => response.json())
            .then((anime) => {
                const newAnimeList = [...animeItemDB.filter(item => item.id !== anime.id), anime]
                setAnimeItemDB(newAnimeList)
            })
    }

    return (
        <div className="w-4/6 mx-auto my-5 border-2 p-3">
            <CreateAnimeItem onAddClick={addAnimeToDB}/>
            {animeItemDB.map((anime) =>
                <AnimeItem key={anime['id']} anime={anime}
                           onDeleteClick={deleteAnimeFromDB}
                           onEditClick={updateAnime}
                />
            )}
        </div>
    );
}
