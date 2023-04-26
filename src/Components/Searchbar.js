import { useState, useContext } from "react";

function Searchbar(props) {
  const [search, setSearch] = useState("");

  return (
    <form onSubmit={(e) => props.handleSearch(e, search)}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Enter a search term here"
      />
      <input type="submit" />
    </form>
  );
}

export default Searchbar;
