import qs from 'qs';
import axios from 'client/src/config/axios.config';

const api = {
  article: {
    getTags: axios.get('/api/articles/tags'),
    getArticle: '',
    getArticles: '',
    getArticlesByTag: ''
  }
};

export default api;
