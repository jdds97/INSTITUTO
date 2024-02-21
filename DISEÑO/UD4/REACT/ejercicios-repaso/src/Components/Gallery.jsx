import PropTypes from "prop-types";

function Gallery({ images }) {
  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.src.medium} alt={image.photographer} />
      ))}
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.shape({
        medium: PropTypes.string.isRequired,
      }).isRequired,
      photographer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
