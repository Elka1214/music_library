import GalleryItem from "./GalleryItem";
import { useContext } from "react";
import { DataContext } from "./Contexts/DataContext";

function Gallery(prop) {
  const { data } = useContext(DataContext);
  const display = data.map((item, i) => {
    return <GalleryItem item={item} key={i} />;
  });

  return <div>{display}</div>;
}

export default Gallery;
