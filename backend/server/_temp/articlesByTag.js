module.exports = (sequelize, DataTypes) => {
  const ArticlesByTag = sequelize.define('articlesByTag', {
      // id: {
      //   type: DataTypes.INTEGER,
      //   unique: true,
      //   primaryKey: true
      // },
      tagId: {
        type: DataTypes.INTEGER,
        // allowNull: false
        // references: {
        //   model: 'articleTag',
        //   key: 'id'
        // }
      },
      articleId: {
        type: DataTypes.INTEGER,
        // allowNull: false
        // references: {
        //   model: 'article',
        //   key: 'id'
        // }
      }
    }, {
      timestamps: false
    }
  );

  ArticlesByTag.associate = function (models) {
    ArticlesByTag.hasMany(models.Article, {
      foreignKey: 'id',
      sourceKey: 'articleId'
    });
    ArticlesByTag.hasMany(models.ArticleTag, {
      foreignKey: 'id',
      sourceKey: 'tagId'
    });
  };

  return ArticlesByTag;
};




