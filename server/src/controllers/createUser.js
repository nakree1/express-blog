const crypt = require('../config/crypt');

export default async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //validate

    const hash = await crypt.hash(password);

    console.log(hash);

    const user = await req.context.models.User.create({
      username,
      email,
      password: hash
    });

    res.status(200);
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.end(err);
  }
};
