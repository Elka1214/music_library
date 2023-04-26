import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavButtons from "./NavButtons";

function AlbumView() {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState([]);

  const renderSongs = albumData.map((song, index) => {
    return (
      <div key={index}>
        <p>
          <Link to={`/song/${song.trackId}`}>{song.trackName}</Link>
        </p>
      </div>
    );
  });

  useEffect(() => {
    const API_URL = `http://localhost:4000/song/${id}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      const justSongs = data.results.filter(
        (entry) => entry.wrapperType === "track"
      );
      setAlbumData(justSongs);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {albumData.length > 0 ? (
        <>
          <h2>{albumData[0].collectionName}</h2>
          <h3>
            <Link to={`/artist/${albumData[0].artistId}`}>
              {albumData[0].artistName}
            </Link>
          </h3>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
      <NavButtons />
      {renderSongs}
    </div>
  );
}

export default AlbumView;
