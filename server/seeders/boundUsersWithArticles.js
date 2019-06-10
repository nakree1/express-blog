import { getRandomInt } from '../../src/utils/random';

const db = require('../models/index');

export default async function boundUsersWithArticles() {
  const userCount = await db.User.count();

  while (true) {
    const article = await db.Article.findOne({
      where: {
        userId: null
      }
    })

    if (!article) {
      break;
    }

    const user = await db.User.findOne({
      where: {
        id: getRandomInt(1, userCount)
      }
    })

    await article.setUser(user);
  }
}
