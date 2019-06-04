export default async (req, res) => {
  req.context.models.User.findAll()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.end(err);
    })
}
