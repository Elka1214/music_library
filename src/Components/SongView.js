import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SongView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [songData, setSongData] = useState({});

  const navButtons = () => {
    return (
      <div>
        <button onClick={() => navigate(-1)}>Back</button> |{" "}
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    );
  };

  useEffect(() => {
    const API_URL = `http://localhost:4000/song/${id}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      setSongData(resData.results[0]);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {songData ? (
        <>
          <h2>{songData.trackName}</h2>
          <h3>{songData.artistName}</h3>
          {navButtons()}
          <img src={songData.artworkUrl100} alt={songData.trackName} />
          <p>{songData.collectionName}</p>
          <p>Released: {songData.releaseDate}</p>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default SongView;
