import express from 'express';
import getUsers from '../controllers/getUsers';
import getArticlesByUserId from '../controllers/getArticlesByUserId';
import createUser from '../controllers/createUser';
import getArticleTags from '../controllers/articles/getArticleTags';
import getArticles from '../controllers/articles/getArticles';
import getArticlesByTag from '../controllers/articles/getArticlesByTag';

const router = express.Router({
  strict: true
});

// router.get('/users', getUsers);
// router.post('/users/create', createUser)
// router.get('/articles/:userId', getArticlesByUserId);

// router.get('/article/:id', () => {});

router.get('/articles/tags', getArticleTags);
router.get('/articles/list', getArticles);
router.get('/articles/list/:tag', getArticlesByTag);


// router.use(authMiddleware);

// router.get('/users/test', function (req, res) {
//   async function getUsers() {
//     try {
//       const users = await db.any('SELECT * FROM users');
//       res.send(JSON.stringify(users, 2));
//     } catch (err) {
//       res.send(err);
//     }
//   }
//
//   getUsers();
// });
//
// router.post('/users/create', function (req, res) {
//   function createUser() {
//     console.log(req.body);
//     const { email, name } = req.body;
//     const date = new Date().toUTCString();
//     db.none(
//       `INSERT INTO users(name, email, created_date, updated_date)
//           VALUES ($1, $2, $3, $4)
//         `, [name, email, date, date]
//     )
//       .then(() => {
//         res.status(200);
//         res.send({
//           message: 'Success'
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500);
//         res.send();
//       });
//
//   }
//
//   createUser();
// });

module.exports = router;
