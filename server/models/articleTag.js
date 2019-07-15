import slugify from 'slugify';

module.exports = (sequelize, DataTypes) => {
  const ArticleTag = sequelize.define('articleTag', {
      title: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
      },
      slug: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
      }
    }, {
      timestamps: false
    }
  );

  ArticleTag.beforeValidate(articleTag => {
    if (!articleTag.slug) {
      articleTag.slug = slugify(articleTag.title, { lower: true });
    }
  })

  ArticleTag.associate = models => {
    // ArticleTag.belongsTo(models.ArticlesByTag, {
    //   foreignKey: 'id',
    //   targetKey: 'tagId'
    // });

    ArticleTag.belongsToMany(models.Article, {
      through: 'articlesByTag',
      as: 'articles',
      foreignKey: 'tagId',
      // targetKey: 'articleId'
    });
    // ArticleTag.belongsToMany(models.Article, {
    //   through: models.ArticlesByTag,
    //   as: 'tagId',
    //   timestamps: false
    // });
  };



  return ArticleTag;
};




