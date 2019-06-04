module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
      title: {
        type: DataTypes.STRING(100),
        // unique: true,
        // allowNull: false
      },
      content: {
        type: DataTypes.STRING(1000),
        // allowNull: false
      }
    },
    {
      timestamps: true
    }
  );

  Article.associate = models => {
    Article.belongsTo(models.User);
  };

  return Article;
};




