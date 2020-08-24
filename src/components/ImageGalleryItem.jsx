import React from 'react';
import style from '../style.module.css';
import PropTypes from 'prop-types';

export default function GalleryItem({ src, id, alt, largeUrl, showModal }) {
  return (
    <li className={style.ImageGalleryItem} onClick={showModal}>
      <img
        id={id}
        className={style.ImageGalleryItemImage}
        src={src}
        alt={alt}
        data-url={largeUrl}
      />
    </li>
  );
}
GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};
