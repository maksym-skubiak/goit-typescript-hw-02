import css from "./ImageCard.module.css";
import { UnsplashImage } from "../../types";

interface Props {
  image: UnsplashImage;
  onClick: () => void;
}

function ImageCard({ image, onClick }: Props) {
  return (
    <div onClick={onClick}>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
export default ImageCard;
