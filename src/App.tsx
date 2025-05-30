import { useState, useEffect } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { UnsplashImage } from "./types";

const API_KEY = "bojQ1VdMVMG05mYPX8jDdIM-5Vqd7hUOKVKHyT4W900";

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query,
              page,
              per_page: 12,
            },
            headers: {
              Authorization: `Client-ID ${API_KEY}`,
            },
          }
        );

        const newImages: UnsplashImage[] = response.data.results;
        setImages((prev) => (page === 1 ? newImages : [...prev, ...newImages]));
      } catch (err) {
        setError("Помилка завантаження зображень");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);

  const handleSelectImage = (img: UnsplashImage) => setSelectedImage(img);

  const handleCloseModal = () => setSelectedImage(null);

  return (
    <div style={{ padding: "1rem" }}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onSelect={handleSelectImage} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={handleCloseModal}
        image={selectedImage}
      />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
