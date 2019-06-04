export default async (req, res) => {
  const Op = req.context.models.Sequelize.Op;
  req.context.models.Article.findAll({
    where: {
      userId: req.params.userId
    }
  })
    .then(articles => {
      res.send(articles);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.end(err);
    })
}
