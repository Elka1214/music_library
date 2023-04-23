import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import Searchbar from "./Components/Searchbar";
import ArtistView from "./Components/ArtistView";
import AlbumView from "./Components/AlbumView";
import { DataContext } from "./Context/DataContext";

function App() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("Search for music!");
  const [data, setData] = useState([]);

  const API_URL = "https://itunes.apple.com/search?term=";

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        const URL = encodeURI(API_URL + search);
        const response = await fetch(URL);
        const data = await response.json();
        if (data.results.length > 0) {
          setData(data.results);
        } else {
          setMessage("Not found");
          setData([]);
        }
      };
      fetchData();
    }
  }, [search]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };

  return (
    <div>
      {message}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Searchbar handleSearch={handleSearch} />
                <DataContext.Provider value={data}>
                  <Gallery />
                </DataContext.Provider>
              </Fragment>
            }
          />

          <Route path="/artist/:id" element={<ArtistView />} />
          <Route path="/album/:id" element={<AlbumView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
