import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ images, onSelect }) {
  return (
    <ul className={css.list}>
      {images.map((img) => (
        <li key={img.id} className={css.item}>
          <ImageCard image={img} onClick={() => onSelect(img)} />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;
