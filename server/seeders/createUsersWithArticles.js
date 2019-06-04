const db = require('../models/index');
const faker = require('faker');

export default async function createUsersWithArticles() {
  const getArticle = () => ({
    title: faker.lorem.words(),
    content: faker.lorem.paragraphs(1)
  });

  for (let i = 0; i < 5; i++) {
    const articles = Array(Math.abs(i - 2)).fill(getArticle());

    await db.User.create({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      Articles: articles
    }, {
      include: [db.Article]
    });
  }
}
