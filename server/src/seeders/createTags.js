const db = require('../models');
// const faker = require('faker');

module.exports = async function createTags() {
  const tags = ['News', 'Science', 'Tech', 'Fashion'];

  tags.forEach(async (tag) => {
    await db.ArticleTag.create({ title: tag })
  })
}
