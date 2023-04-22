import GalleryItem from "./GalleryItem";
import { useContext } from "react";

function Gallery(prop) {
  const { data } = useContext(DataContext);
  const display = props.data.map((item, i) => {
    return <GalleryItem item={item} key={i} />;
  });

  return <div>{display}</div>;
}

export default Gallery;
