import db from '../models';
// const faker = require('faker');

export default async function createTags() {
  const tags = ['News', 'Science', 'Tech', 'Fashion'];

  tags.forEach(async (tag) => {
    await db.ArticleTag.create({ title: tag })
  })
}
