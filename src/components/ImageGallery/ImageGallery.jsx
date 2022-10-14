import PropTypes from 'prop-types';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  console.log('images', images);
  return (
    images.length > 0 && (
      <ImageGalleryStyled>
        {images.map(img => (
          <ImageGalleryItem key={img.id} img={img} onClick={onClick} />
        ))}
      </ImageGalleryStyled>
    )
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
