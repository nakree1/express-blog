import { ResourceNotFoundError } from '../utils/errors';

export default async (req, res, next) => {
  // const Op = req.context.models.Sequelize.Op;
  req.context.models.Article.findAll({
    where: {
      userId: req.params.userId
    }
  })
    .then(articles => {
      if (!articles.length) {
        next(new ResourceNotFoundError('Article', `Find All; Where userId = ${req.params.userId}`))
        return;
      }

      res.send(articles);
    })
    .catch(err => {
      next(err)
    })
}
