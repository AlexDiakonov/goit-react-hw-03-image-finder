import React, { Component } from 'react';
import style from '../style.module.css';
import PropTypes from 'prop-types';
export default class Searchbar extends Component {
  state = { inputValue: '' };

  handleInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleInput}
            className={style.SearchFormInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
