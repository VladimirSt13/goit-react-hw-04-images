import PropTypes from 'prop-types';
import { ImageGalleryItemStyled, ImageStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ img, onClick }) => {
  return (
    <ImageGalleryItemStyled>
      <ImageStyled
        src={img.webformatURL}
        alt={img.tags}
        onClick={() => onClick(img.largeImageURL, img.tags)}
      />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
