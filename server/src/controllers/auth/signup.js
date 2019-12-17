import crypt from '../../config/crypt';

export default async (req, res, next) => {
  try {
    const { db } = req;

    const { username, email, password } = req.body;


    const hash = await crypt.hash(password);

    console.log(hash)

    const user = await db.User.create({
      username,
      email,
      password: hash
    });

    res.status(200);
    res.send(user);
  } catch (err) {
    next(err);
  }
}
