export default async (req, res) => {
  req.context.models.User.create({
    name: req.body.name,
    email: req.body.email,
  })
    .then(user => {
      res.status(200)
      res.send(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.end(err);
    })
}
