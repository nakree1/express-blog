module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('article', {
      title: {
        type: DataTypes.STRING(100),
        unique: true,
        validate: {
          isAlphanumeric: true
        }
      },
      content: {
        type: DataTypes.STRING(1000),
        unique: true,
        validate: {
          isEmail: true
        }
      }
    },
    {
      timestamps: true
    }
  );

  Article.associate = function (models) {
    this.belongsTo(models.user);
  };

  return Article;
};




