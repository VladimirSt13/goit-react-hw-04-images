import { useState, useEffect } from 'react';
import { fetchPics } from '../services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [bigImage, setBigImage] = useState('');
  const [alt, setAlt] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoader(true);

    const getData = async () => {
      try {
        const { data } = await fetchPics(query, page);
        const { hits, totalHits } = data;
        setImages(state => [...state, ...hits]);
        setLoadMore(totalHits > 12 * page);
        setLoader(false);
      } catch (error) {
        console.log('error in useEffect', error);
      }
    };

    getData();
  }, [query, page]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const showBigImage = (bigImage, alt) => {
    setBigImage(bigImage);
    setAlt(alt);
    setShowModal(true);
  };

  const changeQuery = value => {
    setQuery(value);
    setPage(1);
    setImages([]);
  };

  const loadMoreClick = () => {
    setPage(prev => prev + 1);
  };
  return (
    <>
      <Searchbar onSubmit={changeQuery} />
      <ImageGallery images={images} onClick={showBigImage} />
      {loadMore && <Button onClick={loadMoreClick} />}
      <Loader visible={loader} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={bigImage} alt={alt} />
        </Modal>
      )}
    </>
  );
};
