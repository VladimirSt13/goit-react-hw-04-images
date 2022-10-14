import axious from 'axios';

const API_KEY = '12767036-1273f5679a6a0002977b87267';

axious.defaults.baseURL = 'https://pixabay.com/api';

export const fetchPics = (query, page) => {
  const response = axious.get(
    `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};
