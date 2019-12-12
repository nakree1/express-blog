module.exports = (req, res, next) => {
  req.context.models.ArticleTag.findAll()
    .then(tags => res.send(tags))
    .catch(err => {
      next(err)
    })
}
