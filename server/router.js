import express from "express";
import bodyParser from "body-parser";
import { db } from './config/db';


const router = express.Router({
  strict: true
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// router.use(authMiddleware);

router.get('/users/test',function (req, res) {

  async function getUsers() {
    try {
      const users = await db.any('SELECT * FROM users');

      console.log(users);
      res.send(JSON.stringify(users, 2));
    } catch (err) {
      console.log(err)
      res.send(err)
    }
  }

  getUsers();

})

export default router;
