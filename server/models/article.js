import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static init() {
      return super.init(
        {
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
          modelName: 'article',
          timestamps: true,
          sequelize,
        }
      )
    }

    static associate(models) {
      this.myAssociation = this.belongsTo(models.user);
    }
  };

  console.log('Init: Article;')
  Article.init();

  return Article;
}




