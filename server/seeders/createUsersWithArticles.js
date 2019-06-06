const db = require('../models/index');
const faker = require('faker');

export default async function createUsersWithArticles() {
  const getTag = () => ({
    title: faker.lorem.slug().slice(0, 18)
  });

  const getArticle = () => ({
    title: faker.lorem.words(),
    content: faker.lorem.paragraphs(1)
  });

  const getUser = () => ({
    name: faker.internet.userName(),
    email: faker.internet.email()
  });

  const articles = Array(5).fill(null).map(() => getArticle());

  const tag1 = await db.ArticleTag.create(getTag());
  const tag2 = await db.ArticleTag.create(getTag());

  const article1 = await db.Article.create(getArticle());
  const article2 = await db.Article.create(getArticle());
  const article3 = await db.Article.create(getArticle());

  const user1 = await db.User.create(getUser());
  const user2 = await db.User.create(getUser());

  await article1.setTags(tag1);
  await article1.setTags(tag2);
  await article2.setTags(tag1);
  await article3.setTags(tag1);

  await article1.setUser(user1);
  await article2.setUser(user1);
  await article3.setUser(user2);

  // await user1.setArticles(article2);
  // await user2.setArticles(article3);

  db.ArticleTag.findOne({
    where: {
      id: 1
    }
  })
    .then(tag => {
      return tag.getArticles()
    })
    .then(articles => console.log(articles.map(item => item.title)));


  db.Article.findAll({
    where: {
      userId: 1,
    }
  }).then(res => console.log(res.length))

  // Promise.all([
  //   db.ArticleTag.create(getTag()),
  //   db.ArticleTag.create(getTag()),
  // ]).then((tag1, tag2) => {
  //
  //   return Promise.all([
  //     ...articles.map(async (art) => {
  //       const dbArticle = await db.Article.create(art);
  //       console.log(dbArticle.setTag);
  //       console.log(dbArticle.setArticleTag);
  //       console.log(dbArticle.setArticlesTag);
  //       Math.round(Math.random()) ? dbArticle.setTag(tag1) : dbArticle.setTag(tag2)
  //     })
  //   ])
  //
  // }).then((...articles) => {
  //
  //   const users = articles.map(article => {
  //     return new Promise(() => db.User.create({
  //       name: faker.internet.userName(),
  //       email: faker.internet.email(),
  //       articles: article
  //     }, { include: [db.Article] }))
  //   })
  //
  //
  //   return Promise.all(users)
  // });

  // for (let i = 0; i < 5; i++) {
  //   // const articles =
  //   // ; Array(Math.abs(i - 2))
  //   //     .fill(null)
  //   //     .map(_ => {
  //   //       const art = getArticle();
  //   //
  //   //       Math.round(Math.random()) ? art.setArticleTag(tag1) : art.setArticleTag(tag2);
  //   //       return art;
  //   //     })
  //
  //
  //   await

}
