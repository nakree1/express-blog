export default async (req, res, next) => {
  req.context.models.Article.paginate({ params: req.query })
    .then(articles => {
      res.send(articles);
    })
    .catch(err => {
      next(err)
    })
}
