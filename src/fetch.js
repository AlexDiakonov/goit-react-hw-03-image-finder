import axios from 'axios';

const apiKey = '17924110-c02f67d32060055f35546bb91';
const fetchPics = (query, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${apiKey}&q=${query}&page=${page}&per_page=12&image_type=photo`
    )
    .then((response) => response.data.hits);
};
export default fetchPics;
