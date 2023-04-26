import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavButtons from "./NavButtons";

function ArtistView() {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);

  const renderAlbums = artistData.map((album, index) => {
    return (
      <div key={index}>
        <Link to={`/album/${album.collectionId}`}>
          <p>{album.collectionName}</p>
        </Link>
      </div>
    );
  });

  useEffect(() => {
    const API_URL = `http://localhost:4000/album/${id}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      const justAlbums = data.results.filter(
        (entry) => entry.collectionType === "Album"
      );
      setArtistData(justAlbums);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {artistData.length > 0 ? (
        <h2>{artistData[0].artistName}</h2>
      ) : (
        <h2>Loading...</h2>
      )}
      <NavButtons />
      {renderAlbums}
    </div>
  );
}

export default ArtistView;
