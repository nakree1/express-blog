import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router({
  strict: true
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

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
