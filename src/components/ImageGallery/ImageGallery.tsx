import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { UnsplashImage } from "../../types";

interface Props {
  images: UnsplashImage[];
  onSelect: (img: UnsplashImage) => void;
}

function ImageGallery({ images, onSelect }: Props) {
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
