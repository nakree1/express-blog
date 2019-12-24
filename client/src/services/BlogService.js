import api from './api';

export default class BlogService {
  static getTags(id) {
    return api.get('/articles/tags');
  }

  static getArticle() {
    return null;
  }

  static getArticles() {
    return null;
  }

  static getArticlesByTag() {
    return null;
  }
}
