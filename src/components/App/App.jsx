import { useState, useEffect } from 'react'
import { fetchImages } from '../../api/unsplashApi';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './App.css'

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(858);

  useEffect(() => {
    if (!query || query === '') return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false)
        const data = await fetchImages(query, page);
        console.log(data.results);
        console.log(`Current page: ${page}`);
        console.log(`Total pages: ${data.total_pages}`);
        setImages(prevImages => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  
  const handleSearchSubmit = newQuery => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  }

  const handleImageClick = image => {
    setSelectedImg(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImg(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick} />}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && page < totalPages && <LoadMoreBtn onLoadMore={() => setPage(prevPage => prevPage + 1)} />}
      {page >= totalPages && <p> End of Collection</p>}
      <ImageModal isOpen={isModalOpen} onClose={closeModal} image={selectedImg} />
    </div>
  );
}

