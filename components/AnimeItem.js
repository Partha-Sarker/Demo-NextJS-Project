import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

function AnimeItem({anime, onDeleteClick, onEditClick}) {
    const [isFormVisible, setFormVisible] = useState(false)
    const [animeName, setAnimeName] = useState(anime.name)

    function editAnime() {
        setFormVisible(false)
        anime.name = animeName
        onEditClick(anime)
    }

    return (
        <div className="flex justify-between bg-gray-300 rounded-md p-2 mb-2">
            {
                isFormVisible &&
                <input
                    autoFocus={true}
                    className="shadow rounded w-full py-2 px-3 text-gray-700"
                    type="text" placeholder="Anime Title" value={animeName}
                    onKeyDown={(e) => {
                        e.key === 'Enter' && editAnime()
                        e.key === 'Escape' && setFormVisible(false)
                    }}
                    onBlur={() => setFormVisible(false)}
                    onChange={(e) => setAnimeName(e.target.value)}
                />
            }
            {
                !isFormVisible &&
                <>
                    <span>{anime['name']}</span>
                    <div>
                        <button className="mr-2" onClick={() => setFormVisible(true)}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </button>

                        <button onClick={() => onDeleteClick(anime.id)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                </>
            }
        </div>
    );
}

export default AnimeItem;
