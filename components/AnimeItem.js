function AnimeItem({anime}) {
    return (
        <div className="bg-gray-300 rounded-md p-2 my-2">
            {anime['name']}
        </div>
    );
}

export default AnimeItem;
