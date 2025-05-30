import Modal from "react-modal";
import { UnsplashImage } from "../../types";

Modal.setAppElement("#root");

interface Props {
  isOpen: boolean;
  onClose: () => void;
  image: UnsplashImage | null;
}

function ImageModal({ isOpen, onClose, image }: Props) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        content: { maxWidth: "500px", margin: "auto", padding: "1rem" },
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
      }}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        style={{ width: "100%" }}
      />
      <p>Автор: {image.user.name}</p>
      <p>Опис: {image.description || "—"}</p>
      <p>Лайків: {image.likes}</p>
    </Modal>
  );
}
export default ImageModal;
