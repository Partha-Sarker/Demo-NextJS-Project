import {useState} from "react";

function CreateAnimeItem({onAddClick}) {
    const [isFormVisible, setFormVisible] = useState(false)
    const [animeName, setAnimeName] = useState('')

    function addToDatabase() {
        const newAnimeName = animeName.trim();
        if (newAnimeName === '')
            return;
        const newAnime = {name: newAnimeName}
        onAddClick(newAnime)
        setAnimeName('')
    }

    return (
        <>
            <div className="flex justify-between mb-3">
                <p className="font-semibold text-2xl">AnimeItem Tracer</p>
                <button onClick={() => setFormVisible(!isFormVisible)} className="bg-blue-400 px-2 rounded-md text-white">
                    {isFormVisible ? 'Close Form' : 'Create Anime'}
                </button>
            </div>
            {
                isFormVisible &&
                <div className="mb-8">
                    <input
                        className="shadow rounded w-full py-2 px-3 text-gray-700 mb-4"
                        type="text" placeholder="AnimeItem Title"  value={animeName}
                        onKeyDown={(e) => e.key === 'Enter' && addToDatabase()}
                        onChange={(e) => setAnimeName(e.target.value)}/>
                    <button className="bg-red-400 w-full py-1 rounded-md text-white" onClick={() => addToDatabase()}>
                        Add to Database
                    </button>
                </div>
            }
        </>
    )
}

export default CreateAnimeItem;
