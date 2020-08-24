import React, { Component } from 'react';
import Searchbar from './components/Searchbar.jsx';
import fetchPics from './fetch';
import GalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Spinner from './components/Spinner.jsx';
import style from './style.module.css';
import Modal from './components/Modal.jsx';

class App extends Component {
  state = {
    pics: [],
    error: null,
    loading: false,
    searchQuery: '',
    page: 1,
    showModal: false,
    largeImgUrl: '',
    largeAlt: '',
  };

  doFetch = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    fetchPics(searchQuery, page)
      .then((pics) =>
        this.setState((prevState) => ({
          pics: [...prevState.pics, ...pics],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handleQuerySaver = (query) => {
    this.setState({ searchQuery: query });
  };
  smoothScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  showModal = (e) => {
    const largeUrl = e.target.dataset.url;
    const largeAlt = e.target.alt;
    this.setState({
      showModal: true,
      largeImageURL: largeUrl,
      largeAlt: largeAlt,
    });
  };
  closeModal = () => {
    this.setState({ showModal: false, largeImgUrl: '', largeAlt: '' });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.setState({ pics: [], page: 1 });
      this.doFetch();
    }
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevPage < nextPage) {
      this.smoothScroll();
    }
  }
  render() {
    const { pics, loading, showModal, largeImageURL, largeAlt } = this.state;
    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.handleQuerySaver} />
        <ul className={style.ImageGallery}>
          {pics.map((pic) => (
            <GalleryItem
              showModal={this.showModal}
              key={pic.id}
              id={pic.id}
              src={pic.webformatURL}
              alt={pic.tags}
              largeUrl={pic.largeImageURL}
            />
          ))}
        </ul>
        {loading && <Spinner />}
        {pics.length > 0 && <Button loadMore={this.doFetch} />}
        {showModal && (
          <Modal
            closeModal={this.closeModal}
            imgUrl={largeImageURL}
            alt={largeAlt}
          />
        )}
      </div>
    );
  }
}

export default App;
