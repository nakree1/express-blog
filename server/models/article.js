module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('article', {
      title: {
        type: DataTypes.STRING(100),
        // unique: true,
        allowNull: false
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
    // Article.belongsToMany(models.ArticleTag, {
    //   through: models.ArticlesByTag,
    //   as: 'articleId',
    //   timestamps: false
    // });
  };

  return Article;
};




