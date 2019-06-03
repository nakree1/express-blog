import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static init() {
      return super.init(
        {
          name: {
            type: DataTypes.STRING(80),
            unique: true,
            allowNull: false,
            validate: {
              isAlphanumeric: true
            }
          },
          email: {
            type: DataTypes.STRING(80),
            unique: true,
            allowNull: false,
            validate: {
              isEmail: true
            }
          }
        },
        {
          modelName: 'user',
          timestamps: true,
          sequelize
        }
      )
    }
    static associate(models) {
      this.myAssociation = this.hasMany(models.article, {
        onDelete: 'CASCADE'
      });
    }
  };

  console.log('Init: User;')
  User.init();
  return User;
}




