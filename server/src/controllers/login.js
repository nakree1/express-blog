module.exports = async (req, res) => {
  const { username, email, password } = req.body;

  console.log(req.body);

  // if the username / password is missing, we use status code 400
  // indicating a bad request was made and send back a message
  if (!username || !password) {
    return res.status(400).send('Request missing username or password param');
  }

  try {
    const { user, token } = await req.context.models.User.authenticate({
      username,
      password,
      email
    });

    return res.json({ user, token });
  } catch (err) {
    console.log(err);
    return res.status(400).send('invalid username or password');
  }
};
