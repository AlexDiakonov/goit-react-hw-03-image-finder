import React, { Component } from 'react';
import style from '../style.module.css';
import PropTypes from 'prop-types';
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnKey);
  }
  closeOnKey = (e) => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  closeOnClick = (e) => {
    if (e.target.nodeName !== 'IMG') {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <div className={style.Overlay} onClick={this.closeOnClick}>
        <div className={style.Modal}>
          <img src={this.props.imgUrl} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
