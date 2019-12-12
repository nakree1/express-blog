const paginate = require('../utils/paginate');

module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('article', {
      title: {
        type: DataTypes.STRING(100),
        // unique: true,
        allowNull: false
      },
      slug: {
        type: DataTypes.STRING(100),
        // unique: true,
        // allowNull: false
      },
      content: {
        type: DataTypes.STRING(1000),
        allowNull: false
      }
    },
    {
      timestamps: true
    }
  );

  // Article.beforeValidate(article => {
  //   if (!article.slug) {
  //     article.slug = slugify(article.title, { lower: true });
  //   }
  // })

  Article.associate = models => {
    Article.belongsTo(models.User, {
        onDelete: 'CASCADE'
      }
    );
    Article.belongsToMany(models.ArticleTag, {
      through: 'articlesByTag',
      as: 'tags',
      foreignKey: 'articleId'
      // targetKey: 'articleId'
    });
  };

  Article.paginate = options => paginate(Article, options);

  return Article;
};




