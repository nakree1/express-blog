const getRandomInt = require('../utils/random').getRandomInt;

const db = require('../models');
const faker = require('faker');

module.exports = async function createArticles(count = 15) {
  const Op = db.Sequelize.Op;
  const getArticle = () => ({
    title: faker.lorem.words(),
    content: faker.lorem.paragraphs(1)
  });

  const tagsCount = await db.ArticleTag.count();

  for (let i = 0; i < count; i++) {
    const article = await db.Article.create(getArticle());

    const tag1 = getRandomInt(1, tagsCount);
    const tag2 = getRandomInt(1, tagsCount);

    await article.setTags(await db.ArticleTag.findOne({where: {id: tag1 }}));

    if (tag1 !== tag2) {
      await article.setTags(await db.ArticleTag.findAll(
        {
          where: {
            id: {
              [Op.or]: [tag1, tag2]
            }
          }
        }));
    } else {
      await article.setTags(await db.ArticleTag.findOne({where: {id: tag1 }}));
    }
  }

}
