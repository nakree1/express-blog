import api from './api';

export default class ExampleService {
  static getTags(id) {
    return api.get('/api/articles/tags');
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
