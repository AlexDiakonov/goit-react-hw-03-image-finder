import React from 'react';
import style from '../style.module.css';
import PropTypes from 'prop-types';
export default function Button({ loadMore }) {
  return (
    <button className={style.loadMore} onClick={loadMore}>
      Load More
    </button>
  );
}

Button.propTypes = { loadMore: PropTypes.func.isRequired };
